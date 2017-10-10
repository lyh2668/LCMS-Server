const express = require('express')
let router = express.Router()

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.json({
    errcode: 0,
    errmsg: 'ok',
    data: {
      msg: 'this is users'
    }
  })
})

module.exports = router
