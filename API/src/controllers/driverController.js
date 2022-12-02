import driverServices from '../services/driverServices';

const driverController = {
	listDriver: async (req, res) => {
		try {
			const { status, statusMessage, data } = await driverServices.listDriver(req);
			if (status) {
				res.status(200).json({
					status: statusMessage,
					data: data,
				});
			} else {
				res.status(400).json({
					status: statusMessage,
				});
			}
		} catch (error) {
			res.status(400).send(error);
		}
	},

  createDriver: async (req, res) => {
		try {
			const { status, statusMessage, data } = await driverServices.createDriver(req.user, req.body);
			if (status) {
				res.status(200).json({
					status: statusMessage,
					data: data,
				});
			} else {
				res.status(400).json({
					status: statusMessage,
				});
			}
		} catch (error) {
			res.status(400).send(error);
		}
	},

  destroyDriver: async (req, res) => {
		try {
			const { status, statusMessage, data } = await driverServices.destroyDriver(req.body.id);
			if (status) {
				res.status(200).json({
					status: statusMessage,
					data: data,
				});
			} else {
				res.status(400).json({
					status: statusMessage,
				});
			}
		} catch (error) {
			res.status(400).send(error);
		}
	},
};
export default driverController;
