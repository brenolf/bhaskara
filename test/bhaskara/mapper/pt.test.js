import test from 'ava';
import pt from '../../../lib/bhaskara/mapper/pt';

test('pt', t => {
  t.same(pt(10), [1, 10, 0]);
  t.same(pt(40), [4, 10, 0]);
  t.same(pt(18), [1, 10, 8]);
  t.same(pt(12), [1, 10, 2]);
  t.same(pt(100), [1, 100]);
  t.same(pt(9), 9);
});
