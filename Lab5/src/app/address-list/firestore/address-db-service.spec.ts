import { TestBed } from '@angular/core/testing';
import { Firestore } from '@angular/fire/firestore';
import { AddressDbService } from './address-db-service';

describe('AddressDbService', () => {
  let service: AddressDbService;

  beforeEach(() => {
    // This creation test does not call Firestore or access the live database.
    TestBed.configureTestingModule({
      providers: [{ provide: Firestore, useValue: {} }],
    });
    service = TestBed.inject(AddressDbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
