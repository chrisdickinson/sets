'use strict'

const tap = require('tap')

const diff = require('.')

function test (name, check) {
  tap.test(name, assert => {
    check(assert)
    return Promise.resolve()
  })
}

test('returns diff of two sets', assert => {
  assert.equal(
    [...diff(new Set('hello'), new Set('world'))].join(''),
    'he'
  )
})

test('returns symmetric diff of two sets', assert => {
  assert.equal(
    [...diff.symmetric(new Set('hello'), new Set('world'))].join(''),
    'hewrd'
  )
})
