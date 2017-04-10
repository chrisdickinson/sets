'use strict'

const tap = require('tap')

const union = require('.')

function test (name, check) {
  tap.test(name, assert => {
    check(assert)
    return Promise.resolve()
  })
}

test('returns union of two sets', assert => {
  assert.equal(
    [...union(new Set('hello'), new Set('world'))].join(''),
    'helowrd'
  )
})
