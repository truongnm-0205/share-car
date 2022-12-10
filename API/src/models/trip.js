'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Trip extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	Trip.init(
		{
			driverId: DataTypes.INTEGER,
			cost: DataTypes.DOUBLE,
			startAt: DataTypes.DATE,
			startPosition: DataTypes.INTEGER,
			endPosition: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: 'Trip',
		},
	);
	return Trip;
};
