import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService, private router: Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          // Unauthorized error: Clear the token and navigate to login
          this.authService.clearToken();
          this.router.navigate(['/auth/login']);
        } else if (error.status === 403) {
          // Forbidden error: User doesn't have access to this resource
          alert('You do not have permission to access this resource.');
        } else {
          // Log other errors or display a message as needed
          console.error('An error occurred:', error.message);
          alert('An unexpected error occurred.');
        }
        return throwError(error);
      })
    );
  }
}
