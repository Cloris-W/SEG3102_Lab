import { Component, inject } from '@angular/core';
import {
  AbstractControl,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
  NonNullableFormBuilder,
} from '@angular/forms';
import { Router } from '@angular/router';
import { UserDataService } from '../user-data.service';

function phoneNumberValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value as string;

    if (!value) {
      return null;
    }

    const validPhoneNumber = /^[1-9]\d{2}[1-9]\d{6}$/;

    return validPhoneNumber.test(value) ? null : { invalidPhoneNumber: true };
  };
}

@Component({
  selector: 'app-user-form',
  imports: [ReactiveFormsModule],
  templateUrl: './user-form.html',
  styleUrl: './user-form.css',
})
export class UserForm {
  private formBuilder = inject(NonNullableFormBuilder);
  private router = inject(Router);
  private userDataService = inject(UserDataService);

  userForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    phoneNumber: ['', phoneNumberValidator()],
    email: ['', Validators.email],
  });

  get firstName() {
    return this.userForm.controls.firstName;
  }

  get lastName() {
    return this.userForm.controls.lastName;
  }

  get phoneNumber() {
    return this.userForm.controls.phoneNumber;
  }

  get email() {
    return this.userForm.controls.email;
  }

  onSubmit(): void {
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
      return;
    }

    this.userDataService.setUserData(this.userForm.getRawValue());
    this.router.navigate(['/summary']);
  }
}