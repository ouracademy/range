# Range

A range of values (start, end) - aka interval

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
const aRange = range(1, 10); // also if you like interval(1, 10)

String(aRange); // "[1,10]"
String(range(15)); // "[0,15]"
range(2, 10).lenght; // 9
aRange.includes(9); // true
aRange.includes(11); // false
aRange.includes(0); // false
aRange.includes(range(2, 10)); // true
aRange.includes(range(0, 10)); // false
aRange.includes(range(1, 11)); // false

aRange.iterate(); // iterator 1, 2, ...10
aRange.iterate(2); // 1, 5, 9
```

See more examples in our specifications (.spec files)

## Publish

Bump a new version `npm version patch` & then publish it with: `npm publish --access public`
