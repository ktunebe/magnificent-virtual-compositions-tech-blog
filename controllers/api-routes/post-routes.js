const router = require('express').Router()

const { Post, BlogUser, Comment } = require('../../models')

// /post endpoint

// Add post 
router.post('/', async (req, res) => {
  try {
    const newPost = await Post.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    console.log(newPost)

    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json(err);
    console.log(err)
  }
});

// Add comment
router.post('/:id', async (req, res) => {
  const { id } = req.params
  try {
    const newComment = await Comment.create({
      ...req.body,
      post_id: id,
      user_id: req.session.user_id,
    });

    res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router