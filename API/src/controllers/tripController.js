import db from '../models';
import tripServices from '../services/tripService';

const tripController = {
	createNewTrip: async (req, res) => {
		try {
			if (req.user.roleId === 1) {
				return res.status(400).json({
					message: 'Admin are not allowed create new trip',
				});
			}
			const { status, message } = await tripServices.createNewTrip(req.user.id, req.body);
			if (!status) {
				res.status(400).json({
					message: message,
				});
			} else {
				res.status(200).json({
					message: message,
				});
			}
		} catch (error) {
			res.status(400).json(error);
		}
	},
	getAllTrip: async (req, res) => {
		try {
            console.log("abc");
			const trips = await db.Trip.findAll({
				attributes: ['cost', 'startAt', 'startPosition', 'endPosition'],
				include: { model: db.User},
			});
			console.log(trips);
			res.status(200).json({
				message: message,
				data: trips,
			});
		} catch (error) {
			res.status(400).json({
				message: error,
			});
		}
	},
};
export default tripController;
