const express = require('express')
let router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
  res.json({
    errcode: 0,
    errmsg: 'ok',
    data: {
      msg: 'this is index'
    }
  })
})

module.exports = router
