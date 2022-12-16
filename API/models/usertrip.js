'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class UserTrip extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	UserTrip.init(
		{
			tripId: DataTypes.INTEGER,
			userId: DataTypes.INTEGER,
			status: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: 'UserTrip',
		},
	);
	return UserTrip;
};
