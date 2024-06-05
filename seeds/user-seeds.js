const { BlogUser } = require('../models')

// Sample user data
const blogUserData = [
    {
        "username": "johndoe1",
        "email": "john@gmail.com",
        "password": "password1234"
    },
    {
        "username": "janedoe2",
        "email": "jane@gmail.com",
        "password": "password5678"
    }
]

// Function to create posts from data
const seedBlogUsers = () => BlogUser.bulkCreate(blogUserData);
// Export function
module.exports = seedBlogUsers;