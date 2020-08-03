const express = require('express')
const path = require('path')
const logger = require('morgan')
const cors = require('cors')

const router = require('./routes/index')

const app = express()

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', router)

// Use PORT variable or default to 5000
const port = process.env.PORT

app.listen(port, (err) => {
  if (err) {
    console.error('ERROR while starting up server:', err.message)
  } else {
    console.log(`Server running on port ${port}`)
  }
})
