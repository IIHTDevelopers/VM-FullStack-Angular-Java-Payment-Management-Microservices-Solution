import { Component } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-create',
  templateUrl: './order-create.component.html'
})
export class OrderCreateComponent {
  orderForm: FormGroup;
  errorMessage: string | null = null;

  constructor(
    private fb: FormBuilder,
    private orderService: OrderService,
    private router: Router
  ) {
    this.orderForm = this.fb.group({
      userId: ['', Validators.required],
      productIds: ['', Validators.required],
      totalAmount: ['', Validators.required],
      shippingAddress: ['', Validators.required],
      paymentMethod: ['', Validators.required],
      orderDate: ['', Validators.required]
    });
  }

  /**
   * Submits the form to create a new order
   */
  onSubmit(): void {
    if (this.orderForm.invalid) {
      return;
    }

    this.orderService.createOrder(this.orderForm.value).subscribe({
      next: () => this.router.navigate(['/orders']),
      error: (error) => {
        this.errorMessage = 'Failed to create order';
        console.error('Error creating order:', error);
      }
    });
  }
}
