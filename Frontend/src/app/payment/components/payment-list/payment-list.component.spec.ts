import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaymentListComponent } from './payment-list.component';
import { By } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('PaymentListComponent', () => {
  let component: PaymentListComponent;
  let fixture: ComponentFixture<PaymentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaymentListComponent],
      imports: [HttpClientModule, RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('boundary', () => {
    it('should create the component', () => {
      expect(component).toBeTruthy();
    });

    it('should render "Payment List" in an h2 tag', () => {
      const h2 = fixture.debugElement.query(By.css('h2')).nativeElement;
      expect(h2.textContent).toContain('Payment List');
    });

    it('should display error message if there is an error', () => {
      component.errorMessage = 'Failed to load payments';
      fixture.detectChanges();
      const errorMessage = fixture.debugElement.query(By.css('.error-message')).nativeElement;
      expect(errorMessage.textContent).toContain('Failed to load payments');
    });

    it('should display "No payments available" when payment list is empty', () => {
      component.payments = [];
      fixture.detectChanges();
      const noPaymentsMessage = fixture.debugElement.query(By.css('p')).nativeElement;
      expect(noPaymentsMessage.textContent).toContain('No payments available');
    });
  });
});
