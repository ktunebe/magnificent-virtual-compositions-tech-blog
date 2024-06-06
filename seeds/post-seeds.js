const { Post } = require('../models')

// Sample post data
const postData = [
    {
        "post_title": "Coding is Fun!",
        "post_content": "I really enjoy coding.",
        "user_id": "1"
    },
    {
        "post_title": "This Blog is Neato!",
        "post_content": "This is a fun blog.",
        "user_id": "2"
    }
]

// Function to create posts from data
const seedPosts = () => Post.bulkCreate(postData);
// Export function 
module.exports = seedPosts;