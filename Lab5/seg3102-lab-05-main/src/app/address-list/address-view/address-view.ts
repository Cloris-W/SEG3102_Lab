import { Component,EventEmitter,Input, Output, OnChanges, OnInit, inject } from '@angular/core';
import { AddressEntry } from '../address-entry';
import { AbstractControl, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-address-view',
  imports: [ReactiveFormsModule],
  templateUrl: './address-view.html',
  styleUrl: './address-view.css',
})
export class AddressView implements OnInit, OnChanges {
  @Input() address!: AddressEntry;
  @Output() fireDelete: EventEmitter<AddressEntry> = new EventEmitter();
  edit: boolean | undefined;
  private builder: FormBuilder = inject(FormBuilder);
  private router: Router = inject(Router);
  addressForm = this.builder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    phone: ['', Validators.pattern('[1-9]\\d{2}[1-9]\\d{6}')],
    email: ['', Validators.email],
    notes: [''],
  });

  get firstName(): AbstractControl {
    return this.addressForm.controls.firstName;
  }
  get lastName(): AbstractControl {
    return this.addressForm.controls.lastName;
  }
  get phone(): AbstractControl {
    return this.addressForm.controls.phone;
  }
  get email(): AbstractControl {
    return this.addressForm.controls.email;
  }

  ngOnInit(): void{
    this.edit = true;
  }

  ngOnChanges(): void {
    this.addressForm.reset({
      firstName: this.address.firstName,
      lastName: this.address.lastName,
      phone: this.address.phone ?? '',
      email: this.address.email ?? '',
      notes: this.address.notes ?? '',
    });
  }

  showError(control: AbstractControl): boolean {
    return control.invalid && (control.dirty || control.touched);
  }

  onSubmit(): void {
    if (this.addressForm.invalid) {
      this.addressForm.markAllAsTouched();
      return;
    }
    const value = this.addressForm.getRawValue();
    this.address.firstName = <string>value.firstName;
    this.address.lastName = <string>value.lastName;
    this.address.phone = <string>value.phone;
    this.address.email = <string>value.email;
    this.address.notes = <string>value.notes;
    this.router.navigate(['/contact']).then(() => {});
  }

  toggleEdit(): void {
    this.edit = !this.edit;
  }

  delete(): void {
    this.fireDelete.emit(this.address);
  }

}
