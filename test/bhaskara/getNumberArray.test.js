import test from 'ava';
import getNumberArray from '../../lib/bhaskara/getNumberArray';

test('getNumberArray', t => {
  t.same(getNumberArray('zero'), [0]);

  t.same(getNumberArray('one'), [1]);

  t.same(getNumberArray('twenty-two'), [2, 10, 0, 2]);

  t.same(getNumberArray('one hundred ninety nine'), [1, 100, 9, 10, 0, 9]);

  t.same(getNumberArray('fourty two million and one'), [
    4, 10, 0, 2, 1000000, 1
  ]);

  /* eslint no-multi-str:0 */
  t.same(getNumberArray('thirty two trillion nineteen billion fourty four\
   million three hundred twenty-three thousand nine hundred fifty eight'), [3,
     10, 0, 2, 1000000000000, 1, 10, 9, 1000000000, 4, 10, 0, 4, 1000000, 3,
     100, 2, 10, 0, 3, 1000, 9, 100, 5, 10, 0, 8]);
});
