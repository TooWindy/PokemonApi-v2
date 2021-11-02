const express = require('express');
const app = express();
const morgan = require('morgan')
const path =require('path')
module.exports = app

//Parsing Middleware
app.use(morgan('dev'));
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
//static middleware
app.use(express.static(path.join(__dirname, '../public')));

//Send this html for other requests
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
})
//Our Routes
app.use('/api', require('./api'));

//Our catch all error handling middleware (If we get this far down the pipeline)
app.use(function (err, req, res, next) {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
})
