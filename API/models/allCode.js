'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class AllCode extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			AllCode.hasOne(models.User, {
				foreignKey: 'roleId',
			});
			AllCode.hasOne(models.Car, {
				foreignKey: 'status',
			});
		}
	}
	AllCode.init(
		{
			codeName: DataTypes.STRING,
			description: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: 'AllCode',
		},
	);
	return AllCode;
};
