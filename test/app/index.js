
http = require('http')
assert = require('assert')
request = require('supertest')

Koala = require('../..')

require('fs').readdirSync(__dirname).forEach(function (name) {
  if (name[0] === '.') return
  if (name === 'index.js') return
  require('./' + name)
})
