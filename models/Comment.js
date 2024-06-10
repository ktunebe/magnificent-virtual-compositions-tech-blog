// Set up Comment Model
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Post = require('./Post');
const BlogUser = require('./BlogUser')

class Comment extends Model { }

Comment.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
		comment_content: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		post_id: {
			type: DataTypes.INTEGER,
			references: {
				model: Post,
				key: 'id'
			},
			onDelete: 'CASCADE'
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
		modelName: 'comment'
	}
)

module.exports = Comment