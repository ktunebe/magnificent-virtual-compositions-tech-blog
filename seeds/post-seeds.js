const { Post } = require('../models')

// Sample post data
const postData = [
    {
        "post_title": "Test Title",
        "post_content": "This is a test blog post",
        "user_id": "1"
    },
    {
        "post_title": "Test Title 2",
        "post_content": "This is another test blog post",
        "user_id": "2"
    }
]

// Function to create posts from data
const seedPosts = () => Post.bulkCreate(postData);
// Export function 
module.exports = seedPosts;