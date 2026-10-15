import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressView } from './address-view';
import { AddressEntry } from '../address-entry';

describe('AddressView', () => {
  let component: AddressView;
  let fixture: ComponentFixture<AddressView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddressView],
    }).compileComponents();

    fixture = TestBed.createComponent(AddressView);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('address', new AddressEntry('New', 'Entry'));
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
