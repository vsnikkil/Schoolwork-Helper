const pub = require('./public')
const auth = require('./auth')
const frontEnd = require('../../src/app')
const catchError = require('./catchError')

module.exports = function (app, models) {
  frontEnd(app)
  auth(app, models)
  pub(app, models)
  catchError(app)
}
