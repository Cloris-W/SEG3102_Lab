import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserSummary } from './user-summary';
import { provideRouter } from '@angular/router';

describe('UserSummary', () => {
  let component: UserSummary;
  let fixture: ComponentFixture<UserSummary>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserSummary],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(UserSummary);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
