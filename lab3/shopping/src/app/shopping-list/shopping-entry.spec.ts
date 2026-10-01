import { ShoppingEntry } from './shopping-entry';

describe('ShoppingEntry', () => {
  it('should create an instance', () => {
    expect(new ShoppingEntry('productName')).toBeTruthy();
  });
});
