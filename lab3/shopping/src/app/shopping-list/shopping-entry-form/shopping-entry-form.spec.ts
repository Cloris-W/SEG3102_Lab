import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShoppingEntryForm } from './shopping-entry-form';

describe('ShoppingEntryForm', () => {
  let component: ShoppingEntryForm;
  let fixture: ComponentFixture<ShoppingEntryForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShoppingEntryForm],
    }).compileComponents();

    fixture = TestBed.createComponent(ShoppingEntryForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('emits a trimmed product name and clears the field', () => {
    let addedProduct = '';
    component.productAdded.subscribe(productName => addedProduct = productName);
    component.productName = '  broccoli  ';

    component.submit();

    expect(addedProduct).toBe('broccoli');
    expect(component.productName).toBe('');
  });
});
