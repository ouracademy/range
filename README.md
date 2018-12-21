# Range

A package for dealing with ranges (start, end) - aka interval
written in typescript, but works with vanilla JS.

More on [API docs](https://ouracademy.github.io/range/) or our specifications (.spec files) for more examples

## Motivation

Well my motivation is just taste & some useful methods

```js
const aRange = range(0, 5);

if (0 <= myAge && myAge <= 5) console.log("I'm a baby.");
if (aRange.includes(myAge)) console.log("I'm a baby.");

for (let n = 0; n <= 5; n += 2) console.log(n);
for (let n of aRange.iterate(2)) console.log(n);
```

## Usage

```js
import { range } from '@ouracademy/range';

const aRange = range(1, 10); // or interval(1, 10)

String(aRange); // "[1,10]"
String(range(15)); // "[0,15]"
range(2, 10).lenght; // 9
aRange.includes(9); // true
aRange.includes(11); // false
aRange.includes(0); // false
aRange.includes(range(2, 10)); // true
aRange.includes(range(0, 10)); // false
aRange.includes(range(1, 11)); // false

aRange.iterate(); // lazy evaluated - 1, 2 ...10
aRange.iterate(2); // 1, 5, 9

aRange.toArray(); // [1, 2 ... 10]
aRange.toArray(2); // [1, 5, 9]
```

There are other useful functions like: `intersection`, `overlaps` that could be found in the [API doc](https://ouracademy.github.io/range/).
