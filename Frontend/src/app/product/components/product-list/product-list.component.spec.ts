import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductListComponent } from './product-list.component';
import { By } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductListComponent],
      imports: [HttpClientModule, RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('boundary', () => {
    it('should create the component', () => {
      expect(component).toBeTruthy();
    });

    it('should render "Product List" in an h2 tag', () => {
      const h2 = fixture.debugElement.query(By.css('h2')).nativeElement;
      expect(h2.textContent).toContain('Product List');
    });

    it('should display error message if there is an error', () => {
      component.errorMessage = 'Failed to load products';
      fixture.detectChanges();
      const errorMessage = fixture.debugElement.query(By.css('.error-message')).nativeElement;
      expect(errorMessage.textContent).toContain('Failed to load products');
    });

    it('should display "No products available" when product list is empty', () => {
      component.products = [];
      fixture.detectChanges();
      const noProductsMessage = fixture.debugElement.query(By.css('p')).nativeElement;
      expect(noProductsMessage.textContent).toContain('No products available');
    });
  });
});
