# @sets/difference

Return the difference between two sets, or the symmetric difference between two
sets.

```javascript
const difference = require('@sets/difference')

console.log(difference(
  new Set('hello'),
  new Set('world'))
)) // "he"

console.log(difference.symmetric(
  new Set('hello'),
  new Set('world'))
)) // "hewrd"
```

## Installation

```
$ npm install --save @sets/difference
```

## API

### `difference(lhs, rhs) -> Set`

Return the difference between the sets represented by `lhs` and `rhs`. The
resulting set will contain all elements from `lhs` that do not appear in `rhs`.

### `difference.symmetric(lhs, rhs) -> Set`

Return the symmetric difference between the sets represented by `lhs` and `rhs`. The
resulting set will contain all elements from `lhs` that do not appear in `rhs` and
all elements from `rhs` that do not appear in `lhs`.

## License

MIT
