// Set up BlogUser Model
const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class BlogUser extends Model {
	// Check password with encrypted password
	checkPassword(loginPw) {
		return bcrypt.compareSync(loginPw, this.password);
	}
}


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
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
			validate: {
				isEmail: true
			}
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
        len: [8],
      },
		},
	},
	{
		// Password is encrypted before being stored in the database.
		hooks: {
			beforeCreate: async (newUserData) => {
				newUserData.password = await bcrypt.hash(newUserData.password, 10);
				return newUserData;
			}
		},
		sequelize,
		freezeTableName: true,
		underscored: true,
		modelName: 'blog_user'
	}
)

module.exports = BlogUser