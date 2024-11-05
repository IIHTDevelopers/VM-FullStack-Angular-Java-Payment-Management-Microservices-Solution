import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html'
})
export class ProductCreateComponent {
  productForm: FormGroup;
  errorMessage: string | null = null;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private router: Router
  ) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      description: ['', Validators.required],
      ownerId: ['', Validators.required]
    });
  }

  /**
   * Submits the form to create a new product
   */
  onSubmit(): void {
    if (this.productForm.invalid) {
      return;
    }

    this.productService.createProduct(this.productForm.value).subscribe({
      next: () => this.router.navigate(['/products']),
      error: (error) => {
        this.errorMessage = 'Failed to create product';
        console.error('Error creating product:', error);
      }
    });
  }
}
