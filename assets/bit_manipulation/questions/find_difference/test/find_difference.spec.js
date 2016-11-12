
import { expect } from 'chai';
import findDifference from '../find_difference';

describe('findDifference()', () => {
  it('should return the random letter from s2, that is not in s1', () => {
    expect(findDifference('abcd', 'abecd')).to.equal('e');
    expect(findDifference('abcd', 'kabcd')).to.equal('k');
    expect(findDifference('a', 'aa')).to.equal('a');
  });
});