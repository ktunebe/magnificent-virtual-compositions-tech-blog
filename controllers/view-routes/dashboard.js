const router = require('express').Router();
const { Post, BlogUser } = require('../../models')

// `/dashboard` endpoint

// get user posts
router.get('/', async (req, res) => {
    
    try {
        const postData = await Post.findAll({
            where: {
                user_id: req.session.user_id
            },
            include: [
                {
                  model: BlogUser,
                  attributes: ['username'],
                },
            ]
        })

        const posts = postData.map((post) => post.get({ plain: true }));

        // Pass serialized data and session flag into template
        res.render('dashboard', {
            posts,
            logged_in: req.session.logged_in
        });

    } catch (err) {
        console.log(err)
        res.status(500).send('Error getting user dashboard.')
    }
});

module.exports = router