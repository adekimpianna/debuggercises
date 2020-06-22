# Debuggercises 

> 6/22/2020, 8:47:04 PM 

## [exercises](../../README.md)/[18-functions-401](../README.md)/1-refactors 

- [/1-implicit-to-explicit.js](#1-implicit-to-explicitjs) - _pass_ 
- [/2-implicit-to-explicit.js](#2-implicit-to-explicitjs) - _pass_ 
- [/3-explicit-to-implicit.js](#3-explicit-to-implicitjs) - _pass_ 
- [/4-explicit-to-implicit.js](#4-explicit-to-implicitjs) - _pass_ 
---

## /1-implicit-to-explicit.js 

> pass 
>
> [review source](../../../exercises/18-functions-401/1-refactors/1-implicit-to-explicit.js)

```txt
+ PASS: Test 1
+ PASS: Test 2
+ PASS: Test 3
+ PASS: Test 4
+ PASS: Test 5
+ PASS: Test 6
```

```js
'use strict';

/**
 * among the greatest mysteries in the world. what does this thing do?
 *  no matter, you can still refactor it!
 * @param {any} a
 * @param {any} b
 * @returns {any}
 */
const mystery = (a, b) => (Boolean(a) !== Boolean(b))
  || b ? a && b : !b && !a;


const _1_arg1 = 1;
const _1_arg2 = 1;
const _1_expect = 1;
const _1_actual = mystery(_1_arg1, _1_arg2);
console.assert(_1_actual === _1_expect, 'Test 1');

const _2_arg1 = 1;
const _2_arg2 = 0;
const _2_expect = 0;
const _2_actual = mystery(_2_arg1, _2_arg2);
console.assert(_2_actual === _2_expect, 'Test 2');

const _3_arg1 = 0;
const _3_arg2 = 1;
const _3_expect = 0;
const _3_actual = mystery(_3_arg1, _3_arg2);
console.assert(_3_actual === _3_expect, 'Test 3');

const _4_arg1 = 0;
const _4_arg2 = 0;
const _4_expect = true;
const _4_actual = mystery(_4_arg1, _4_arg2);
console.assert(_4_actual === _4_expect, 'Test 4');

const _5_arg1 = null;
const _5_arg2 = 'hello!';
const _5_expect = null;
const _5_actual = mystery(_5_arg1, _5_arg2);
console.assert(_5_actual === _5_expect, 'Test 5');

const _6_arg1 = Infinity;
const _6_arg2 = 0;
const _6_expect = 0;
const _6_actual = mystery(_6_arg1, _6_arg2);
console.assert(_6_actual === _6_expect, 'Test 6');


```

[TOP](#debuggercises)

---

## /2-implicit-to-explicit.js 

> pass 
>
> [review source](../../../exercises/18-functions-401/1-refactors/2-implicit-to-explicit.js)

```txt
+ PASS: Test 1
+ PASS: Test 2
+ PASS: Test 3
+ PASS: Test 4
+ PASS: Test 5
+ PASS: Test 6
```

```js
'use strict';

/**
 * among the greatest mysteries in the world. what does this thing do?
 *  no matter, you can still refactor it!
 * @param {any} a
 * @param {any} b
 * @returns {boolean}
 */
const mystery = (a, b) => typeof a !== b
  || !b
  && (Number.isNaN(b) || isNaN(a));


const _1_arg1 = 1;
const _1_arg2 = 'number';
const _1_expect = false;
const _1_actual = mystery(_1_arg1, _1_arg2);
console.assert(_1_actual === _1_expect, 'Test 1');

const _2_arg1 = 1;
const _2_arg2 = 'string';
const _2_expect = true;
const _2_actual = mystery(_2_arg1, _2_arg2);
console.assert(_2_actual === _2_expect, 'Test 2');

const _3_arg1 = 0;
const _3_arg2 = '14';
const _3_expect = true;
const _3_actual = mystery(_3_arg1, _3_arg2);
console.assert(_3_actual === _3_expect, 'Test 3');

const _4_arg1 = 0;
const _4_arg2 = 0;
const _4_expect = true;
const _4_actual = mystery(_4_arg1, _4_arg2);
console.assert(_4_actual === _4_expect, 'Test 4');

const _5_arg1 = null;
const _5_arg2 = 'object';
const _5_expect = false;
const _5_actual = mystery(_5_arg1, _5_arg2);
console.assert(_5_actual === _5_expect, 'Test 5');

const _6_arg1 = Infinity;
const _6_arg2 = 0;
const _6_expect = true;
const _6_actual = mystery(_6_arg1, _6_arg2);
console.assert(_6_actual === _6_expect, 'Test 6');


```

[TOP](#debuggercises)

---

## /3-explicit-to-implicit.js 

> pass 
>
> [review source](../../../exercises/18-functions-401/1-refactors/3-explicit-to-implicit.js)

```txt
+ PASS: Test 1
+ PASS: Test 2
+ PASS: Test 3
+ PASS: Test 4
+ PASS: Test 5
+ PASS: Test 6
```

```js
'use strict';

/**
 * among the greatest mysteries in the world. what does this thing do?
 *  no matter, you can still refactor it!
 * @param {any} a
 * @param {any} b
 * @returns {number}
 */
const mystery = (a, b) => {
  const result = Number(typeof a === typeof b)
    && (a > b) ? Number(a) : Number(b);
  return result;
};


const _1_arg1 = 'string';
const _1_arg2 = '14';
const _1_expect = NaN;
const _1_actual = mystery(_1_arg1, _1_arg2);
console.assert(Object.is(_1_actual, _1_expect), 'Test 1');

const _2_arg1 = undefined;
const _2_arg2 = null;
const _2_expect = 0;
const _2_actual = mystery(_2_arg1, _2_arg2);
console.assert(Object.is(_2_actual, _2_expect), 'Test 2');

const _3_arg1 = 0;
const _3_arg2 = 1;
const _3_expect = 1;
const _3_actual = mystery(_3_arg1, _3_arg2);
console.assert(Object.is(_3_actual, _3_expect), 'Test 3');

const _4_arg1 = 0;
const _4_arg2 = '0';
const _4_expect = 0;
const _4_actual = mystery(_4_arg1, _4_arg2);
console.assert(Object.is(_4_actual, _4_expect), 'Test 4');

const _5_arg1 = null;
const _5_arg2 = 'hello!';
const _5_expect = NaN;
const _5_actual = mystery(_5_arg1, _5_arg2);
console.assert(Object.is(_5_actual, _5_expect), 'Test 5');

const _6_arg1 = Infinity;
const _6_arg2 = NaN;
const _6_expect = NaN;
const _6_actual = mystery(_6_arg1, _6_arg2);
console.assert(Object.is(_6_actual, _6_expect), 'Test 6');


```

[TOP](#debuggercises)

---

## /4-explicit-to-implicit.js 

> pass 
>
> [review source](../../../exercises/18-functions-401/1-refactors/4-explicit-to-implicit.js)

```txt
+ PASS: Test 1
+ PASS: Test 2
+ PASS: Test 3
+ PASS: Test 4
+ PASS: Test 5
+ PASS: Test 6
```

```js
'use strict';

/**
 * among the greatest mysteries in the world. what does this thing do?
 *  no matter, you can still refactor it!
 * @param {any} a
 * @param {any} b
 * @returns {string}
 */
const mystery = (a, b) => {
  const result = String(a) || String(b);
  return result;
};


const _1_arg1 = 'string';
const _1_arg2 = '14';
const _1_expect = 'string';
const _1_actual = mystery(_1_arg1, _1_arg2);
console.assert(Object.is(_1_actual, _1_expect), 'Test 1');

const _2_arg1 = undefined;
const _2_arg2 = null;
const _2_expect = 'undefined';
const _2_actual = mystery(_2_arg1, _2_arg2);
console.assert(Object.is(_2_actual, _2_expect), 'Test 2');

const _3_arg1 = 0;
const _3_arg2 = 1;
const _3_expect = '0';
const _3_actual = mystery(_3_arg1, _3_arg2);
console.assert(Object.is(_3_actual, _3_expect), 'Test 3');

const _4_arg1 = '';
const _4_arg2 = '0';
const _4_expect = '0';
const _4_actual = mystery(_4_arg1, _4_arg2);
console.assert(Object.is(_4_actual, _4_expect), 'Test 4');

const _5_arg1 = '';
const _5_arg2 = 'hello!';
const _5_expect = 'hello!';
const _5_actual = mystery(_5_arg1, _5_arg2);
console.assert(Object.is(_5_actual, _5_expect), 'Test 5');

const _6_arg1 = Infinity;
const _6_arg2 = NaN;
const _6_expect = 'Infinity';
const _6_actual = mystery(_6_arg1, _6_arg2);
console.assert(Object.is(_6_actual, _6_expect), 'Test 6');


```

[TOP](#debuggercises)
