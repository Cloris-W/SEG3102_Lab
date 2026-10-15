import { provideRouter } from '@angular/router';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { environment } from '../../../environments/environment';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressTable } from './address-table';

describe('AddressTable', () => {
  let component: AddressTable;
  let fixture: ComponentFixture<AddressTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddressTable],
      providers: [provideRouter([]),
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideAuth(() => getAuth()),
        provideFirestore(() => getFirestore())],
    }).compileComponents();

    fixture = TestBed.createComponent(AddressTable);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
