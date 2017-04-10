# @sets/union

Return the union between two sets.

```javascript
const union = require('@sets/union')

console.log(union(
  new Set('hello'),
  new Set('world')
)) // "helowrd"
```

## Installation

```
$ npm install --save @sets/union
```

## API

### `union(lhs, rhs) -> Set`

Return the union between the sets represented by `lhs` and `rhs`. The
resulting set will contain all elements that appear in either `lhs` and `rhs`.

## License

MIT
