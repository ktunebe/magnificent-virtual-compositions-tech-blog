require('dotenv').config();

const sequelize = require('../config/connection');
const BlogPost = require('../models/BlogPost');
const postData = require('./post-seeds.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await BlogPost.bulkCreate(postData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();