'use strict';

let x = 'hi!';
console.assert(x === 'hi!', 'Test 1: x');
{
  let x = 'bye!';
  const y = 'hi!';

  console.assert(x === 'bye!', 'Test 2: x');
  console.assert(y === 'hi!', 'Test 3: y');
}
console.assert(x === 'bye!', 'Test 4: x');
