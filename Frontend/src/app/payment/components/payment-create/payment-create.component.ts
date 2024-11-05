import { Component } from '@angular/core';
import { PaymentService } from '../../services/payment.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-create',
  templateUrl: './payment-create.component.html'
})
export class PaymentCreateComponent {
  paymentForm: FormGroup;
  errorMessage: string | null = null;

  constructor(
    private fb: FormBuilder,
    private paymentService: PaymentService,
    private router: Router
  ) {
    this.paymentForm = this.fb.group({
      userId: ['', Validators.required],
      orderId: ['', Validators.required],
      totalAmount: ['', Validators.required],
      paymentMethod: ['', Validators.required],
      creditCardNumber: ['', Validators.required]
    });
  }

  /**
   * Submits the form to create a new payment
   */
  onSubmit(): void {
    if (this.paymentForm.invalid) {
      return;
    }

    this.paymentService.createPayment(this.paymentForm.value).subscribe({
      next: () => this.router.navigate(['/payments']),
      error: (error) => {
        this.errorMessage = 'Failed to create payment';
        console.error('Error creating payment:', error);
      }
    });
  }
}
