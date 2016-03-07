import test from 'ava';
import forestify from '../../lib/bhaskara/forestify';

test('forestify', t => {
  t.same(forestify([0]), [
    {
      factor: 1,
      subtrees: 0
    }
  ]);

  t.same(forestify([1, 100, 9, 10, 0, 9]), [
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
  ]);

  t.same(forestify([4, 10, 0, 2, 1000000, 1]), [
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
  ]);

  t.same(forestify([2, 1000000, 2, 100, 2, 10, 0, 1, 1000, 1]), [
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
  ]);
});
