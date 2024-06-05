const router = require('express').Router();
const { Post, BlogUser, Comment } = require('../../models')

// `/posts` endpoint

// get one post
router.get('/:id', async (req, res) => {
	// find a single post by id
	const { id } = req.params
	try {
		const postData = await Post.findByPk(id, {
			include: [
				{
					model: BlogUser,
					attributes: ['username'],
				},
				{
					model: Comment,
					attributes: ['comment_content', 'comment_date'],
					include: [
						{
							model: BlogUser,
							attributes: ['username']
						}
					]
				}
			]
		})

		const post = postData.get({ plain: true })

		// Pass serialized data and session flag into template
		res.render('post', {
			post,
			logged_in: req.session.logged_in
		});

	} catch (err) {
		console.log(err)
		res.status(500).send('Error getting post.')
	}
});

module.exports = router