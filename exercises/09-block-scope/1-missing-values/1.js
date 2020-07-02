'use strict';

let m = 3;
console.assert(m === 3, 'Test 1: m');
{
  let l = 10;
  const m = 5;
  l = 0;
  console.assert(m === 5, 'Test 2: m');
  console.assert(l === 0, 'Test 3: l');
}
m = 20;
console.assert(m === 20, 'Test 4: m');
