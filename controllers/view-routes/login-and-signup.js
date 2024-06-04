const router = require('express').Router();

// '/login' endpoint
router.get('/', (req, res) => {
    if (req.session.logged_in) {
      return res.redirect('/profile')
    }
  
    try {
      res.render('login')
    } catch(err) {
      res.status(500).send('Error rendering login route')
    }
  })

  module.exports = router