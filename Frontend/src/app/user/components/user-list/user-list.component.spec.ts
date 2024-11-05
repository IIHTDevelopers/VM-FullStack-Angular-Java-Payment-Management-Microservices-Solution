import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserListComponent } from './user-list.component';
import { By } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserListComponent],
      imports: [HttpClientModule, RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('boundary', () => {
    it('should create the component', () => {
      expect(component).toBeTruthy();
    });

    it('should render "User List" in an h2 tag', () => {
      const h2 = fixture.debugElement.query(By.css('h2')).nativeElement;
      expect(h2.textContent).toContain('User List');
    });

    it('should display error message if there is an error', () => {
      component.errorMessage = 'Failed to load users';
      fixture.detectChanges();
      const errorMessage = fixture.debugElement.query(By.css('.error-message')).nativeElement;
      expect(errorMessage.textContent).toContain('Failed to load users');
    });

    it('should display "No users available" when user list is empty', () => {
      component.users = [];
      fixture.detectChanges();
      const noUsersMessage = fixture.debugElement.query(By.css('p')).nativeElement;
      expect(noUsersMessage.textContent).toContain('No users available');
    });
  });
});
