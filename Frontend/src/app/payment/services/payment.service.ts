import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Payment } from '../../shared/models/payment.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private apiUrl = '/api/payments';

  constructor(private http: HttpClient) { }

  /**
   * Fetch all payments
   */
  getAllPayments(): Observable<Payment[]> {
    return this.http.get<Payment[]>(`${this.apiUrl}/all`);
  }

  /**
   * Fetch payments by user ID
   */
  getPaymentsByUserId(userId: number): Observable<Payment[]> {
    return this.http.get<Payment[]>(`${this.apiUrl}/${userId}`);
  }

  /**
   * Create a new payment
   */
  createPayment(payment: Payment): Observable<Payment> {
    return this.http.post<Payment>(`${this.apiUrl}/create`, payment);
  }
}
