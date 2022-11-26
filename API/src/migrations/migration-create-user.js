'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	// name: DataTypes.STRING,
	// email: DataTypes.STRING,
	// address: DataTypes.STRING,
	// age: DataTypes.INTEGER,
	// phone_number: DataTypes.STRING,
	// role: DataTypes.INTEGER,
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('users', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			username: {
				type: Sequelize.STRING,
			},
			password: {
				type: Sequelize.STRING,
			},
			address: {
				type: Sequelize.STRING,
			},
			age: {
				type: Sequelize.INTEGER,
			},
			phoneNumber: {
				type: Sequelize.STRING,
			},
			roleId: {
				type: Sequelize.INTEGER,
				references: {
					model: 'all_codes',
					key: 'id',
				},
				defaultValue: 1,
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
		await queryInterface.dropTable('users');
	},
};
