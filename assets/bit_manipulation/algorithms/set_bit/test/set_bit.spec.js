
import { expect } from 'chai';
import setBit from '../set_bit';

describe('setBtest()', () => {
  test('should set the bit at index i', () => {
    expect(setBtest(6, 5)).to.equal(38);
  });
});
