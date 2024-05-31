// Set up dish Model
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class BlogPost extends Model {}

BlogPost.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        post_title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        post_content: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        post_creator: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        post_date: {
            type: DataTypes.DATE,
            allowNull: false
        } 

    },{
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'blogPost'
    }
)

module.exports = BlogPost