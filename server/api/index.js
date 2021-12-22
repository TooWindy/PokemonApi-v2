const router = require('express').Router()
//Routes go here. Your GET/POST/DELETE/etc. requests will go in another file.
router.use('/pokemon', require('./pokemon'))
//Error Handling
router.use((req, res, next) => {
  const err = new Error('API route not found!')
  err.status = 404
  next(err)
})
module.exports = router
