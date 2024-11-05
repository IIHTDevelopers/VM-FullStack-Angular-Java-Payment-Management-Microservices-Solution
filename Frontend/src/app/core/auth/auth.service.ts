import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authUrl = '/auth';  // Base URL for authentication endpoints
  private tokenKey = 'authToken'; // Local storage key for the token

  constructor(private http: HttpClient) { }

  /**
   * Authenticate user and retrieve token.
   * @param email - User's email
   * @param password - User's password
   * @returns Observable with the token string or an error
   */
  login(email: string, password: string): Observable<string> {
    const authRequest = { email, password };
    return this.http.post<string>(`${this.authUrl}/token`, authRequest).pipe(
      tap((token) => this.storeToken(token)),
      catchError((error) => {
        console.error('Login error:', error);
        return of(''); // Return empty string on error for simplicity
      })
    );
  }

  /**
   * Validates the stored token with the backend.
   * @returns Observable with validation result
   */
  validateToken(): Observable<string> {
    const token = this.getToken();
    if (!token) {
      return of('Invalid Token');
    }
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<string>(`${this.authUrl}/validate`, { headers }).pipe(
      catchError((error) => {
        console.error('Token validation error:', error);
        return of('Invalid Token');
      })
    );
  }

  /**
   * Stores the token in local storage.
   * @param token - Token to store
   */
  private storeToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  /**
   * Retrieves the token from local storage.
   * @returns Token string or null if not found
   */
  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  /**
   * Clears the token from local storage (e.g., on logout).
   */
  clearToken(): void {
    localStorage.removeItem(this.tokenKey);
  }

  /**
   * Checks if the user is authenticated by verifying token presence.
   * @returns True if token exists, otherwise false
   */
  isAuthenticated(): boolean {
    return !!this.getToken();
  }
}
