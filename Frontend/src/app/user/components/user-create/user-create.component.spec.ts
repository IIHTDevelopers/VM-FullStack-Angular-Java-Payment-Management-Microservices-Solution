import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { UserCreateComponent } from './user-create.component';
import { By } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('UserCreateComponent', () => {
  let component: UserCreateComponent;
  let fixture: ComponentFixture<UserCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserCreateComponent],
      imports: [ReactiveFormsModule, HttpClientModule, RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('boundary', () => {
    it('should create the component', () => {
      expect(component).toBeTruthy();
    });

    it('should render "Create User" in an h2 tag', () => {
      const h2 = fixture.debugElement.query(By.css('h2')).nativeElement;
      expect(h2.textContent).toContain('Create User');
    });

    it('should have a First Name input field', () => {
      const firstNameInput = fixture.debugElement.query(By.css('input[id="firstName"]'));
      expect(firstNameInput).toBeTruthy();
    });

    it('should have a Last Name input field', () => {
      const lastNameInput = fixture.debugElement.query(By.css('input[id="lastName"]'));
      expect(lastNameInput).toBeTruthy();
    });

    it('should have an Email input field', () => {
      const emailInput = fixture.debugElement.query(By.css('input[id="email"]'));
      expect(emailInput).toBeTruthy();
    });

    it('should have a Phone Number input field', () => {
      const phoneNumberInput = fixture.debugElement.query(By.css('input[id="phoneNumber"]'));
      expect(phoneNumberInput).toBeTruthy();
    });

    it('should have a Password input field', () => {
      const passwordInput = fixture.debugElement.query(By.css('input[id="password"]'));
      expect(passwordInput).toBeTruthy();
    });

    it('should have a Status select field', () => {
      const statusSelect = fixture.debugElement.query(By.css('select[id="status"]'));
      expect(statusSelect).toBeTruthy();
    });

    it('should have a Create User button', () => {
      const button = fixture.debugElement.query(By.css('button[type="submit"]'));
      expect(button).toBeTruthy();
      expect(button.nativeElement.textContent).toContain('Create User');
    });
  });
});
