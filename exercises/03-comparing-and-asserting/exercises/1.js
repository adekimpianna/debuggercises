'use strict';

// replace the _'s to pass the isTrues

const isTrue1 = true === true;
console.log(typeof isTrue1, isTrue1);
console.assert(isTrue1, 'Assertion 1');

const isTrue2 = 0.0 === 0.0;
console.log(typeof isTrue2, isTrue2);
console.assert(isTrue2, 'Assertion 2');

const isTrue3 = false === false;
console.log(typeof isTrue3, isTrue3);
console.assert(isTrue3, 'Assertion 3');

const isTrue4 = 'null' === 'null';
console.log(typeof isTrue4, isTrue4);
console.assert(isTrue4, 'Assertion 4');
