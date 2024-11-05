import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { OrderCreateComponent } from './order-create.component';
import { By } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('OrderCreateComponent', () => {
  let component: OrderCreateComponent;
  let fixture: ComponentFixture<OrderCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrderCreateComponent],
      imports: [ReactiveFormsModule, HttpClientModule, RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('boundary', () => {
    it('should create the component', () => {
      expect(component).toBeTruthy();
    });

    it('should render "Create Order" in an h2 tag', () => {
      const h2 = fixture.debugElement.query(By.css('h2')).nativeElement;
      expect(h2.textContent).toContain('Create Order');
    });

    it('should have a User ID input field', () => {
      const userIdInput = fixture.debugElement.query(By.css('input[id="userId"]'));
      expect(userIdInput).toBeTruthy();
    });

    it('should have a Product IDs input field', () => {
      const productIdsInput = fixture.debugElement.query(By.css('input[id="productIds"]'));
      expect(productIdsInput).toBeTruthy();
    });

    it('should have a Total Amount input field', () => {
      const totalAmountInput = fixture.debugElement.query(By.css('input[id="totalAmount"]'));
      expect(totalAmountInput).toBeTruthy();
    });

    it('should have a Shipping Address input field', () => {
      const shippingAddressInput = fixture.debugElement.query(By.css('input[id="shippingAddress"]'));
      expect(shippingAddressInput).toBeTruthy();
    });

    it('should have a Payment Method input field', () => {
      const paymentMethodInput = fixture.debugElement.query(By.css('input[id="paymentMethod"]'));
      expect(paymentMethodInput).toBeTruthy();
    });

    it('should have an Order Date input field', () => {
      const orderDateInput = fixture.debugElement.query(By.css('input[id="orderDate"]'));
      expect(orderDateInput).toBeTruthy();
    });

    it('should have a Create Order button', () => {
      const button = fixture.debugElement.query(By.css('button[type="submit"]'));
      expect(button).toBeTruthy();
      expect(button.nativeElement.textContent).toContain('Create Order');
    });
  });
});
