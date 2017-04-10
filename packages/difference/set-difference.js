'use strict'

module.exports = Object.assign(difference, {symmetric})

const filter = require('@iterables/filter')
const chain = require('@iterables/chain')

function difference (lhs, rhs) {
  return new Set(chain(
    filter(lhs, xs => !rhs.has(xs))
  ))
}

function symmetric (lhs, rhs) {
  return new Set(chain(
    filter(lhs, xs => !rhs.has(xs)),
    filter(rhs, xs => !lhs.has(xs))
  ))
}
