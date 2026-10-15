import { TestBed } from '@angular/core/testing';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

import { environment } from '../../../environments/environment';
import { AuthService } from '../../authentication/auth-service';
import { AddressDbService } from './address-db-service';

describe('AddressDbService', () => {
  let service: AddressDbService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideAuth(() => getAuth()),
        provideFirestore(() => getFirestore()),
        AuthService
      ]
    });

    service = TestBed.inject(AddressDbService);
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
