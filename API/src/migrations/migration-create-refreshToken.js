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
		await queryInterface.createTable('refreshtokens', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			refresh_token: {
				type: Sequelize.STRING,
			},
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('refreshtokens');
	},
};
