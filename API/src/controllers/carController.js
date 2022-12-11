import carServices from '../services/carServices';

const carController = {
	registerNewCar: async (req, res) => {
		const { status, message, car } = await carServices.createNewCar(req.body, req.user.id);
		console.log(status, message, car);
		if (status) {
			res.status(200).json({
				message: message,
				data: car,
			});
		} else {
			res.status(400).json({
				message: message,
			});
		}
	},
	deleteCarForUser: async (req, res) => {
		const id = req.params.carId;
		const { status, message } = await carServices.deleteCarByCarId(id, req.user.id);
		if (status) {
			res.status(200).json({
				message: message,
			});
		} else {
			res.status(400).json({
				message: message,
			});
		}
	},
	getAllCarForUser: async (req, res) => {
		const { status, message, cars } = await carServices.getAllCarByUserId(req.user.id);
		if (status) {
			res.status(200).json({
				message: message,
				data: cars,
			});
		} else {
			res.status(400).json({
				message: message,
			});
		}
	},
	getAllCarForAdmin: async (req, res) => {
		const { status, message, cars } = await carServices.getAllCar();
		if (status) {
			res.status(200).json({
				message: message,
				data: cars,
			});
		} else {
			res.status(400).json({
				message: message,
			});
		}
	},
};
export default carController;
