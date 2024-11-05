import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderListComponent } from './order-list.component';
import { By } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('OrderListComponent', () => {
  let component: OrderListComponent;
  let fixture: ComponentFixture<OrderListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrderListComponent],
      imports: [HttpClientModule, RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('boundary', () => {
    it('should create the component', () => {
      expect(component).toBeTruthy();
    });

    it('should render "Order List" in an h2 tag', () => {
      const h2 = fixture.debugElement.query(By.css('h2')).nativeElement;
      expect(h2.textContent).toContain('Order List');
    });

    it('should display error message if there is an error', () => {
      component.errorMessage = 'Failed to load orders';
      fixture.detectChanges();
      const errorMessage = fixture.debugElement.query(By.css('.error-message')).nativeElement;
      expect(errorMessage.textContent).toContain('Failed to load orders');
    });

    it('should display "No orders available" when order list is empty', () => {
      component.orders = [];
      fixture.detectChanges();
      const noOrdersMessage = fixture.debugElement.query(By.css('p')).nativeElement;
      expect(noOrdersMessage.textContent).toContain('No orders available');
    });
  });
});
