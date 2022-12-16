const db = require( '../models');

const allCodeController = {
	getAllCode: async (req, res) => {
		const allCodes = await db.AllCode.findAll();
		res.status(200).json({
			message: 'Get All code successfully',
			data: allCodes,
		});
	},
};
module.exports = allCodeController;
