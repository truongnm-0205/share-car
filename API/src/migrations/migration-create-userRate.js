'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	// userId: DataTypes.INTEGER,
	// driverId: DataTypes.INTEGER,
	// rate: DataTypes.INTEGER,
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('userRates', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			userId: {
				type: Sequelize.INTEGER,
				references: {
					model: 'users',
					key: 'id',
				},
				onDelete: 'CASCADE',
			},
			driverId: {
				type: Sequelize.INTEGER,
				references: {
					model: 'drivers',
					key: 'id',
				},
				onDelete: 'CASCADE',
			},
			rate: {
				type: Sequelize.STRING,
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('userRates');
	},
};
