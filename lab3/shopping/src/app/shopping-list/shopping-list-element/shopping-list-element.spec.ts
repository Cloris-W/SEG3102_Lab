import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShoppingListElement } from './shopping-list-element';

describe('ShoppingListElement', () => {
  let component: ShoppingListElement;
  let fixture: ComponentFixture<ShoppingListElement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShoppingListElement],
    }).compileComponents();

    fixture = TestBed.createComponent(ShoppingListElement);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
