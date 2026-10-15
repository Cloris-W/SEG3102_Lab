import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressTable } from './address-table';

describe('AddressTable', () => {
  let component: AddressTable;
  let fixture: ComponentFixture<AddressTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddressTable],
    }).compileComponents();

    fixture = TestBed.createComponent(AddressTable);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
