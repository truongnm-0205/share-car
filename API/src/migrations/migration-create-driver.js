'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	/**
	 * 			car_name: DataTypes.STRING,
	 *      max_user: DataTypes.STRING,
	 */
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('drivers', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			car_name: {
				type: Sequelize.STRING,
			},
			max_user: {
				type: Sequelize.INTEGER,
			},
			userId: {
				type: Sequelize.INTEGER,
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
		await queryInterface.dropTable('drivers');
	},
};
