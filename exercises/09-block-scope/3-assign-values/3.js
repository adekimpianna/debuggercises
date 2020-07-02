'use strict';

let m = 'tall';
console.assert(m === 'tall', 'Test 1: m');
{
  let l = 'short';
  const m = l;
  l = 'mini';
  console.assert(m === 'short', 'Test 2: m');
  console.assert(l === 'mini', 'Test 3: l');
}
m = 'medium';
console.assert(m === 'medium', 'Test 4: m');
