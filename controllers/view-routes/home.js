const router = require('express').Router();
const { Post, BlogUser } = require('../../models');
// const withAuth = require('../utils/auth');


router.get('/', async (req, res) => {
  try {
    // Get all posts and JOIN with user data
    const postData = await Post.findAll({
      include: [
        {
          model: BlogUser,
          attributes: ['username'],
        },
      ],
    });
    // Serialize data so the template can read it
    const posts = postData.map((post) => post.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('home', { 
      posts, 
      logged_in: req.session.logged_in,
      session_user: req.session.user_id 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;