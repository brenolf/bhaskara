import test from 'ava';
import traverse from '../../lib/bhaskara/traverse';

test('traverse', t => {
  t.same(traverse([
    {
      factor: 1,
      subtrees: 0
    }
  ]), 0);

  t.same(traverse([
    {
      factor: 100,
      subtrees: 1
    },
    {
      factor: 10,
      subtrees: 9
    },
    {
      factor: 1,
      subtrees: 9
    }
  ]), 199);

  t.same(traverse([
    {
      factor: 1000000,
      subtrees: [
        {
          factor: 10,
          subtrees: 4
        },
        {
          factor: 1,
          subtrees: 2
        }
      ]
    },
    {
      factor: 1,
      subtrees: 1
    }
  ]), 42000001);

  t.same(traverse([
    {
      factor: 1000000,
      subtrees: 2
    },
    {
      factor: 1000,
      subtrees: [
        {
          factor: 100,
          subtrees: 2
        },
        {
          factor: 10,
          subtrees: 2
        },
        {
          factor: 1,
          subtrees: 1
        }
      ]
    },
    {
      factor: 1,
      subtrees: 1
    }
  ]), 2221001);
});
