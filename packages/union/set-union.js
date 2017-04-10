'use strict'

module.exports = union

// use chain to skip materializing an array
const chain = require('@iterables/chain')

function union (lhs, rhs) {
  return new Set(chain(lhs, rhs))
}
