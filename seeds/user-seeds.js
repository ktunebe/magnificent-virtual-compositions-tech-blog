const { BlogUser } = require('../models')

// Sample user data
const blogUserData = [
    {
        "username": "johndoe1",
        "password": "password1234"
    },
    {
        "username": "janedoe2",
        "password": "password5678"
    }
]

// Function to create posts from data
const seedBlogUsers = () => BlogUser.bulkCreate(blogUserData);
// Export function
module.exports = seedBlogUsers;