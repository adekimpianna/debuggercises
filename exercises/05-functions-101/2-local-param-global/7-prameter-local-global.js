'use strict';

let global = '.';

const jazz = (parameter) => {
  const local = `jazzy ${global}`;
  global = `#${global}`;
  return `${parameter} ${local} ${global}`;
};

const globalTest1 = global === '.';
console.assert(globalTest1, 'Test 1: global');

const jazzReturn1 = jazz('hello');
const jazzTest1 = jazzReturn1 === 'hello jazzy . #.';
console.assert(jazzTest1, 'Test 2: jazz');

const globalTest2 = global === '#.';
console.assert(globalTest2, 'Test 3: global');

global = 'hi';

const globalTest3 = global === 'hi';
console.assert(globalTest3, 'Test 4: global');

const jazzReturn2 = jazz('boat');
const jazzTest2 = jazzReturn2 === 'boat jazzy hi #hi';
console.assert(jazzTest2, 'Test 5: jazz');

const globalTest4 = global === '#hi';
console.assert(globalTest4, 'Test 6: global');

global = 'bye.';

const globalTest5 = global === 'bye.';
console.assert(globalTest5, 'Test 7: global');
