// Set up Post Model
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const BlogUser = require('./BlogUser')

class Post extends Model { }

Post.init(
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
		post_date: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: DataTypes.NOW,
		},
		user_id: {
			type: DataTypes.INTEGER,
			references: {
				model: BlogUser,
				key: 'id'
			}
		}
	},
	{
		sequelize,
		freezeTableName: true,
		underscored: true,
		modelName: 'post'
	}
)

module.exports = Post