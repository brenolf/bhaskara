import test from 'ava';
import en from '../../../lib/bhaskara/mapper/en';

test('en', t => {
  t.same(en(10), [1, 10, 0]);
  t.same(en(40), [4, 10, 0]);
  t.same(en(18), [1, 10, 8]);
  t.same(en(12), [1, 10, 2]);
  t.same(en(100), 100);
  t.same(en(9), 9);
});
