import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShoppingView } from './shopping-view';
import { ShoppingEntry } from '../shopping-entry';

describe('ShoppingView', () => {
  let component: ShoppingView;
  let fixture: ComponentFixture<ShoppingView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShoppingView],
    }).compileComponents();

    fixture = TestBed.createComponent(ShoppingView);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('shopping', new ShoppingEntry('broccoli'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
