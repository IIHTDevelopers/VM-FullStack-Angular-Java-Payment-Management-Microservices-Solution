import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../../services/payment.service';
import { Payment } from '../../../shared/models/payment.model';

@Component({
  selector: 'app-payment-list',
  templateUrl: './payment-list.component.html'
})
export class PaymentListComponent implements OnInit {
  payments: Payment[] = [];
  errorMessage: string | null = null;

  constructor(private paymentService: PaymentService) { }

  ngOnInit(): void {
    this.loadAllPayments();
  }

  /**
   * Loads all payments and handles errors
   */
  loadAllPayments(): void {
    this.paymentService.getAllPayments().subscribe({
      next: (payments) => this.payments = payments,
      error: (error) => {
        this.errorMessage = 'Failed to load payments';
        console.error('Error loading payments:', error);
      }
    });
  }
}
