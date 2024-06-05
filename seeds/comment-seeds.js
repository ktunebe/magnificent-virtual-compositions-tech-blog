const { Comment } = require('../models')

// Sample comment data
const commentData = [
    {
        "comment_content": "This is a test blog comment",
        "post_id": "2",
        "user_id": "1"
    },
    {
        "comment_content": "This is another test blog comment",
        "post_id": "1",
        "user_id": "2"
    }
]

// Function to create posts from data
const seedComments = () => Comment.bulkCreate(commentData);
// Export function
module.exports = seedComments;