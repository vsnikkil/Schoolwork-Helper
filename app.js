const express = require('express');
const ejs = require('ejs')
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// index page 
app.get('/', (req, res)=>{
    res.render('../src/views/homepage');
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

app.listen(8080);
console.log('8080 is the magic port');