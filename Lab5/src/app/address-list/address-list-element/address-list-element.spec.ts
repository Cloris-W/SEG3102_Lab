import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressListElement } from './address-list-element';
import { AddressEntry } from '../address-entry';
import { NotificationService } from '../notification-service';

describe('AddressListElement', () => {
  let component: AddressListElement;
  let fixture: ComponentFixture<AddressListElement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddressListElement],
      providers: [NotificationService],
    }).compileComponents();

    fixture = TestBed.createComponent(AddressListElement);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('address', new AddressEntry('New', 'Entry'));
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
