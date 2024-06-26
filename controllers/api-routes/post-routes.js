const router = require('express').Router()

const { Post, BlogUser, Comment } = require('../../models')

// api/posts endpoint

// Add post 
router.post('/', async (req, res) => {
  try {
    const newPost = await Post.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json(err);
    console.log(err)
  }
});

// update a post by its id value
router.put('/:id', async (req, res) => {
  const { id } = req.params
  try {
    const updatedPost = await Post.update(req.body, {
      where: { id }
    })
    res.json(updatedPost)
  } catch (err) {
    console.log(err)
    res.status(500).send('Error updating post.')
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params
  try {
    const deletedPost = await Post.destroy({
      where: { id }
    });
  
  res.json(deletedPost)
  } catch (err) {
    res.status(400).json(err);
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