// Set up BlogUser Model
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class BlogUser extends Model {}

BlogUser.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'blog_user'
    }
)

module.exports = BlogUser