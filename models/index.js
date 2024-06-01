// import models
const Post = require('./Post')
const Comment = require('./Comment');
const BlogUser = require('./BlogUser');

// Comments belong to Post
Comment.belongsTo(Post, {
  foreignKey: 'post_id'
})
// Posts have many Comments
Post.hasMany(Comment, {
  foreignKey: 'post_id'
})

// Comments belong to BlogUser
Comment.belongsTo(BlogUser, {
  foreignKey: 'user_id'
})
// BlogUsers have many Comments
BlogUser.hasMany(Comment, {
  foreignKey: 'user_id'
})

// Posts belong to BlogUser
Post.belongsTo(BlogUser, {
  foreignKey: 'user_id'
})
// BlogUsers have many Posts
BlogUser.hasMany(Post, {
  foreignKey: 'user_id'
})


module.exports = {
  Post,
  BlogUser,
  Comment,
};