import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { of } from 'rxjs';
import { AddressList } from './address-list';
import { AddressDbService } from './firestore/address-db-service';

describe('AddressList', () => {
  let component: AddressList;
  let fixture: ComponentFixture<AddressList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddressList],
      providers: [
        provideRouter([]),
        { provide: AddressDbService, useValue: { getAddresses: () => of([]) } }
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AddressList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});