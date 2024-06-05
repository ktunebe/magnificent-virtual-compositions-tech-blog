const router = require('express').Router()

const homeView = require('./home')
const dashboardView = require('./dashboard')
const postView = require('./post');
const loginView = require('./login')

router.use('/', homeView)
router.use('/dashboard', dashboardView)
router.use('/posts', postView)
router.use('/login', loginView)

module.exports = router