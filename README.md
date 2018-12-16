# Range

A range of values (start, end)

## Motivation

Well my motivation is just taste & some useful methods

```js
// I really don't like to always do this
if (0 <= myAge && myAge <= 5) console.log("I'm a baby.");
if (6 <= myAge && myAge <= 12) console.log("I'm in my childhood.");
if (13 <= myAge && myAge <= 20) console.log("I'm a teenager.");
if (21 <= myAge && myAge <= 25) console.log("I'm young.");

// I prefer doing this
console.log(
  [
    { range: range(5), lifeStep: "I'm a baby." },
    { range: range(6, 12), lifeStep: "I'm in my childhood." },
    { range: range(13, 20), lifeStep: "I'm a teenager." },
    { range: range(21, 25), lifeStep: "I'm young." }
  ].find(x => x.range.includes(myAge)).lifeStep
);
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
```

See more examples in our specifications (.spec files)

## Publish

Bump a new version `npm version patch` & then publish it with: `npm publish --access public`
