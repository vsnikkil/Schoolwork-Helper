const express = require('express');
const ejs = require('ejs');
<<<<<<< Updated upstream
const path = require('path');

function fromHere(filePath){
  return path.resolve(__dirname,filePath);
}
=======
var path = require ('path');
>>>>>>> Stashed changes
// set the view engine to ejs


module.exports = function(app){
  app.set('view engine', 'ejs');
  // index page
  app.get('/', (req, res)=>{
      res.render(fromHere('./views/homepage'));
  });

  app.get('/subjects', (req, res)=>{
      res.render('')
  })

  app.get('/features', (req, res)=>{
      res.render('')
  })

  app.get('/premium', (req, res)=>{
      res.render('')
  })

  app.get('/contact', (req, res)=>{
      res.render('')
  })

  app.get('/donate', (req, res)=>{
      res.render('')
  })

  app.get('/login', (req, res)=>{
      res.render('')
  })

  app.get('/signup', (req, res)=>{
      res.render('')
  })
}
