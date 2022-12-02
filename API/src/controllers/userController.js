import jwt from 'jsonwebtoken';
import { json } from 'sequelize';
import db from '../models';
import userServices from '../services/userServices';

const userController = {
	profileUser: async (req, res) => {
		try {
			const { status, statusMessage, data } = await userServices.profileUser(req.user);
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

  updateUser: async (req, res) => {
    try {
			const { status, statusMessage, data } = await userServices.updateUser(req.user, req.body);
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
export default userController;
