var express = require('express')
var path = require('path')
var logger = require('morgan')

var router = require('./routes/index')

var app = express()

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', router)

// Use PORT variable or default to 5000
const port = process.env.PORT || 5000

app.listen(port, (err) => {
  if (err) {
    console.error('ERROR while starting up server:', err.message)
  } else {
    console.log(`Server running on port ${port}`)
  }
})
