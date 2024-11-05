import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { PaymentCreateComponent } from './payment-create.component';
import { By } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('PaymentCreateComponent', () => {
  let component: PaymentCreateComponent;
  let fixture: ComponentFixture<PaymentCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaymentCreateComponent],
      imports: [ReactiveFormsModule, HttpClientModule, RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('boundary', () => {
    it('should create the component', () => {
      expect(component).toBeTruthy();
    });

    it('should render "Create Payment" in an h2 tag', () => {
      const h2 = fixture.debugElement.query(By.css('h2')).nativeElement;
      expect(h2.textContent).toContain('Create Payment');
    });

    it('should have a User ID input field', () => {
      const userIdInput = fixture.debugElement.query(By.css('input[id="userId"]'));
      expect(userIdInput).toBeTruthy();
    });

    it('should have an Order ID input field', () => {
      const orderIdInput = fixture.debugElement.query(By.css('input[id="orderId"]'));
      expect(orderIdInput).toBeTruthy();
    });

    it('should have a Total Amount input field', () => {
      const totalAmountInput = fixture.debugElement.query(By.css('input[id="totalAmount"]'));
      expect(totalAmountInput).toBeTruthy();
    });

    it('should have a Payment Method input field', () => {
      const paymentMethodInput = fixture.debugElement.query(By.css('input[id="paymentMethod"]'));
      expect(paymentMethodInput).toBeTruthy();
    });

    it('should have a Credit Card Number input field', () => {
      const creditCardNumberInput = fixture.debugElement.query(By.css('input[id="creditCardNumber"]'));
      expect(creditCardNumberInput).toBeTruthy();
    });

    it('should have a Create Payment button', () => {
      const button = fixture.debugElement.query(By.css('button[type="submit"]'));
      expect(button).toBeTruthy();
      expect(button.nativeElement.textContent).toContain('Create Payment');
    });
  });
});
