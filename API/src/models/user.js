'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class User extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			User.belongsTo(models.AllCode, {
				foreignKey: 'roleId',
			});
			// User.hasMany(models.Driver, {
			// 	foreignKey: 'userId',
			// });
		}
	}
	User.init(
		{
			username: DataTypes.STRING,
			password: DataTypes.STRING,
			address: DataTypes.STRING,
			age: DataTypes.INTEGER,
			phoneNumber: DataTypes.STRING,
			roleId: {
				type: DataTypes.INTEGER,
				references: {
					model: 'AllCode',
					key: 'id',
				},
			},
		},
		{
			sequelize,
			modelName: 'User',
		},
	);
	return User;
};
