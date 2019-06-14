const createError = require('http-errors')
const express = require('express')
const logger = require('morgan')
const dotenv = require('dotenv')
const router = require('./routes')
const expressValidator = require('express-validator')
const app = express()
const cors = require('cors')

// Set environment variables
dotenv.config()

// configure
app.use(expressValidator())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())

// api routes
app.use('/api', router)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  const status = err.status || 500
  res.status(status).send({code: status, msg: err.message})
})

module.exports = app
