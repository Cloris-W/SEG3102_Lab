import { provideRouter } from '@angular/router';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { environment } from '../../environments/environment';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordForgot } from './password-forgot';

describe('PasswordForgot', () => {
  let component: PasswordForgot;
  let fixture: ComponentFixture<PasswordForgot>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasswordForgot],
      providers: [provideRouter([]),
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideAuth(() => getAuth())],
    }).compileComponents();

    fixture = TestBed.createComponent(PasswordForgot);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
