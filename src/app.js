const express = require('express')
const ejs = require('ejs')
const path = require('path')

function fromHere (url) { return path.resolve(__dirname, url) };

// set the view engine to ejs

module.exports = function (app) {
  app.use(express.static(fromHere('/public')))
  app.set('view engine', 'ejs')

  app.use((req, res, next) => {
    res.locals.req = req
    res.locals.res = res
    next()
  })

  app.get('/', (req, res) => {
    res.render(fromHere('../src/views/homepage'))
  })

  app.use(express.static(fromHere('./public')));

  ['login', 'signup'].forEach(url => {
    const viewPath = fromHere('./views/' + url)
    app.get('/' + url, (req, res) => {
      res.render(viewPath)
    })
  })

  app.get('/subjects', (req, res) => {
    res.render('')
  })

  app.get('/features', (req, res) => {
    res.render('')
  })

  app.get('/premium', (req, res) => {
    res.render('')
  })

  app.get('/contact', (req, res) => {
    res.render('')
  })

  app.get('/donate', (req, res) => {
    res.render('')
  })
}
