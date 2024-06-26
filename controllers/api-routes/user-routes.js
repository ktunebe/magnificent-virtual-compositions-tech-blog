const router = require('express').Router();
const { BlogUser } = require('../../models')

// api/users endpoint

// Create new user
router.post('/', async (req, res) => {
  try {
    const userData = await BlogUser.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// Log in and check login info is correct
router.post('/login', async (req, res) => {
  try {
    const userData = await BlogUser.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      console.log('UUUUUUUUUUUUUUUUUUUUUSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSERRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR = ' + req.session.user_id)
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

// Log out, end session and return to home page
router.get('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.redirect('/')
      
    });
  } else {
    res.status(404).end();
  }
});


  module.exports = router