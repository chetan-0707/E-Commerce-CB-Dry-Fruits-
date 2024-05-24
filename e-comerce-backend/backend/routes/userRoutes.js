const express = require('express')
const {
  signUpUser,
  signInUser,
  getUser,
  signOutUser,
} = require('../controller/user.controller')
const {verifyUser} = require('../middleware/middleware')
const router = express.Router()

router.post('/signup', signUpUser)
router.post('/signin', signInUser)
router.post('/signout', signOutUser)

router.route('/me').get([verifyUser], getUser)

module.exports = router
