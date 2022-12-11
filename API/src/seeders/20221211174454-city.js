'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		/**
		 * Add seed commands here.
		 *
		 * Example:
		 * await queryInterface.bulkInsert('People', [{
		 *   name: 'John Doe',
		 *   isBetaMember: false
		 * }], {});
		 */
		await queryInterface.bulkInsert(
			'Cities',
			[
				{ name: 'Thành phố Hà Nội', createdAt: new Date(), updatedAt: new Date() },
				{ name: 'Tỉnh Hà Giang', createdAt: new Date(), updatedAt: new Date() },
				{ name: 'Tỉnh Cao Bằng', createdAt: new Date(), updatedAt: new Date() },
				{ name: 'Tỉnh Bắc Kạn', createdAt: new Date(), updatedAt: new Date() },
				{ name: 'Tỉnh Tuyên Quang', createdAt: new Date(), updatedAt: new Date() },
				{ name: 'Tỉnh Lào Cai', createdAt: new Date(), updatedAt: new Date() },
				{ name: 'Tỉnh Điện Biên', createdAt: new Date(), updatedAt: new Date() },
				{ name: 'Tỉnh Lai Châu', createdAt: new Date(), updatedAt: new Date() },
				{ name: 'Tỉnh Sơn La', createdAt: new Date(), updatedAt: new Date() },
				{ name: 'Tỉnh Yên Bái', createdAt: new Date(), updatedAt: new Date() },
				{ name: 'Tỉnh Hoà Bình', createdAt: new Date(), updatedAt: new Date() },
				{ name: 'Tỉnh Thái Nguyên', createdAt: new Date(), updatedAt: new Date() },
				{ name: 'Tỉnh Lạng Sơn', createdAt: new Date(), updatedAt: new Date() },
				{ name: 'Tỉnh Quảng Ninh', createdAt: new Date(), updatedAt: new Date() },
				{ name: 'Tỉnh Bắc Giang', createdAt: new Date(), updatedAt: new Date() },
				{ name: 'Tỉnh Phú Thọ', createdAt: new Date(), updatedAt: new Date() },
				{ name: 'Tỉnh Vĩnh Phúc', createdAt: new Date(), updatedAt: new Date() },
				{ name: 'Tỉnh Bắc Ninh', createdAt: new Date(), updatedAt: new Date() },
				{ name: 'Tỉnh Hải Dương', createdAt: new Date(), updatedAt: new Date() },
				{ name: 'Thành phố Hải Phòng', createdAt: new Date(), updatedAt: new Date() },
				{ name: 'Tỉnh Hưng Yên', createdAt: new Date(), updatedAt: new Date() },
				{ name: 'Tỉnh Thái Bình', createdAt: new Date(), updatedAt: new Date() },
				{ name: 'Tỉnh Hà Nam', createdAt: new Date(), updatedAt: new Date() },
				{ name: 'Tỉnh Nam Định', createdAt: new Date(), updatedAt: new Date() },
				{ name: 'Tỉnh Ninh Bình', createdAt: new Date(), updatedAt: new Date() },
				{ name: 'Tỉnh Thanh Hóa', createdAt: new Date(), updatedAt: new Date() },
				{ name: 'Tỉnh Nghệ An', createdAt: new Date(), updatedAt: new Date() },
				{ name: 'Tỉnh Hà Tĩnh', createdAt: new Date(), updatedAt: new Date() },
				{ name: 'Tỉnh Quảng Bình', createdAt: new Date(), updatedAt: new Date() },
				{ name: 'Tỉnh Quảng Trị', createdAt: new Date(), updatedAt: new Date() },
				{ name: 'Tỉnh Thừa Thiên Huế', createdAt: new Date(), updatedAt: new Date() },
				{ name: 'Thành phố Đà Nẵng', createdAt: new Date(), updatedAt: new Date() },
				{ name: 'Tỉnh Quảng Nam', createdAt: new Date(), updatedAt: new Date() },
				{ name: 'Tỉnh Quảng Ngãi', createdAt: new Date(), updatedAt: new Date() },
				{ name: 'Tỉnh Bình Định', createdAt: new Date(), updatedAt: new Date() },
				{ name: 'Tỉnh Phú Yên', createdAt: new Date(), updatedAt: new Date() },
				{ name: 'Tỉnh Khánh Hòa', createdAt: new Date(), updatedAt: new Date() },
				{ name: 'Tỉnh Ninh Thuận', createdAt: new Date(), updatedAt: new Date() },
				{ name: 'Tỉnh Bình Thuận', createdAt: new Date(), updatedAt: new Date() },
				{ name: 'Tỉnh Kon Tum', createdAt: new Date(), updatedAt: new Date() },
				{ name: 'Tỉnh Gia Lai', createdAt: new Date(), updatedAt: new Date() },
				{ name: 'Tỉnh Đắk Lắk', createdAt: new Date(), updatedAt: new Date() },
				{ name: 'Tỉnh Đắk Nông', createdAt: new Date(), updatedAt: new Date() },
				{ name: 'Tỉnh Lâm Đồng', createdAt: new Date(), updatedAt: new Date() },
				{ name: 'Tỉnh Bình Phước', createdAt: new Date(), updatedAt: new Date() },
				{ name: 'Tỉnh Tây Ninh', createdAt: new Date(), updatedAt: new Date() },
				{ name: 'Tỉnh Bình Dương', createdAt: new Date(), updatedAt: new Date() },
				{ name: 'Tỉnh Đồng Nai', createdAt: new Date(), updatedAt: new Date() },
				{ name: 'Tỉnh Bà Rịa - Vũng Tàu', createdAt: new Date(), updatedAt: new Date() },
				{ name: 'Thành phố Hồ Chí Minh', createdAt: new Date(), updatedAt: new Date() },
				{ name: 'Tỉnh Long An', createdAt: new Date(), updatedAt: new Date() },
				{ name: 'Tỉnh Tiền Giang', createdAt: new Date(), updatedAt: new Date() },
				{ name: 'Tỉnh Bến Tre', createdAt: new Date(), updatedAt: new Date() },
				{ name: 'Tỉnh Trà Vinh', createdAt: new Date(), updatedAt: new Date() },
				{ name: 'Tỉnh Vĩnh Long', createdAt: new Date(), updatedAt: new Date() },
				{ name: 'Tỉnh Đồng Tháp', createdAt: new Date(), updatedAt: new Date() },
				{ name: 'Tỉnh An Giang', createdAt: new Date(), updatedAt: new Date() },
				{ name: 'Tỉnh Kiên Giang', createdAt: new Date(), updatedAt: new Date() },
				{ name: 'Thành phố Cần Thơ', createdAt: new Date(), updatedAt: new Date() },
				{ name: 'Tỉnh Hậu Giang', createdAt: new Date(), updatedAt: new Date() },
				{ name: 'Tỉnh Sóc Trăng', createdAt: new Date(), updatedAt: new Date() },
				{ name: 'Tỉnh Bạc Liêu', createdAt: new Date(), updatedAt: new Date() },
				{ name: 'Tỉnh Cà Mau', createdAt: new Date(), updatedAt: new Date() },
			],
			{},
		);
	},

	async down(queryInterface, Sequelize) {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
	},
};
