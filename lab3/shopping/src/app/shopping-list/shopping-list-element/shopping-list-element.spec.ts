import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShoppingListElement } from './shopping-list-element';
import { NotificationService } from '../notification-service';
import { ShoppingEntry } from '../shopping-entry';

describe('ShoppingListElement', () => {
  let component: ShoppingListElement;
  let fixture: ComponentFixture<ShoppingListElement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShoppingListElement],
      providers: [NotificationService],
    }).compileComponents();

    fixture = TestBed.createComponent(ShoppingListElement);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('shopping', new ShoppingEntry('broccoli'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
