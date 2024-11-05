import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductCreateComponent } from './product-create.component';
import { By } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('ProductCreateComponent', () => {
  let component: ProductCreateComponent;
  let fixture: ComponentFixture<ProductCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductCreateComponent],
      imports: [ReactiveFormsModule, HttpClientModule, RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('boundary', () => {
    it('should create the component', () => {
      expect(component).toBeTruthy();
    });

    it('should render "Create Product" in an h2 tag', () => {
      const h2 = fixture.debugElement.query(By.css('h2')).nativeElement;
      expect(h2.textContent).toContain('Create Product');
    });

    it('should have a Product Name input field', () => {
      const nameInput = fixture.debugElement.query(By.css('input[id="name"]'));
      expect(nameInput).toBeTruthy();
    });

    it('should have a Price input field', () => {
      const priceInput = fixture.debugElement.query(By.css('input[id="price"]'));
      expect(priceInput).toBeTruthy();
    });

    it('should have a Description input field', () => {
      const descriptionInput = fixture.debugElement.query(By.css('input[id="description"]'));
      expect(descriptionInput).toBeTruthy();
    });

    it('should have an Owner ID input field', () => {
      const ownerIdInput = fixture.debugElement.query(By.css('input[id="ownerId"]'));
      expect(ownerIdInput).toBeTruthy();
    });

    it('should have a Create Product button', () => {
      const button = fixture.debugElement.query(By.css('button[type="submit"]'));
      expect(button).toBeTruthy();
      expect(button.nativeElement.textContent).toContain('Create Product');
    });
  });
});
