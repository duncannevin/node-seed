const {Router} = require('express')
const router = Router()
const helloRouter = require('./hello.router')

router.use('/hello', helloRouter)

module.exports = router