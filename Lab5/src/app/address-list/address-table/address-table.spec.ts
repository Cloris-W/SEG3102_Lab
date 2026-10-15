import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { of } from 'rxjs';
import { AddressTable } from './address-table';
import { AddressDbService } from '../firestore/address-db-service';

describe('AddressTable', () => {
  let component: AddressTable;
  let fixture: ComponentFixture<AddressTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddressTable],
      providers: [
        provideRouter([]),
        { provide: AddressDbService, useValue: { getAddresses: () => of([]) } }
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AddressTable);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});