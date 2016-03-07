import test from 'ava';
import identity from '../../../lib/bhaskara/mapper/identity';

test('identity', t => {
  t.same(identity(10), 10);
  t.same(identity(true), true);
});
