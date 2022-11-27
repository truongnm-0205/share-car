'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	// userId: DataTypes.INTEGER,
	// driverId: DataTypes.INTEGER,
	// rate: DataTypes.INTEGER,
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('UserRates', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			userId: {
				type: Sequelize.INTEGER,
				references: {
					model: 'Users',
					key: 'id',
				},
				onDelete: 'CASCADE',
			},
			driverId: {
				type: Sequelize.INTEGER,
				references: {
					model: 'Drivers',
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
		await queryInterface.dropTable('UserRates');
	},
};
