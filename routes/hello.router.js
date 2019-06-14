const { Router } = require('express')
const helloRouter = Router()

helloRouter.get('/:name?', (req, res, next) => {
  const name = req.params.name

  if (name) {
    res.send(`Hello, ${name}!`)
  } else {
    res.send('Hello, you!')
  }
})

module.exports = helloRouter