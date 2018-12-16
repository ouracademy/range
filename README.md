# Range

A range of values (start, end)

## Usage

```js
const aRange = range(1, 10); // also if you like interval(1, 10)

String(aRange); // `[1,10]`
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
