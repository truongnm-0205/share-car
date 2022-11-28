import jwt from 'jsonwebtoken';
import { json } from 'sequelize';
import db from '../models';
import userServices from '../services/userServices';

const authController = {
	registerUser: async (req, res) => {
		try {
			const { status, statusMessage, newUser } = await userServices.createNewUser(req.body);
			if (status) {
				res.status(200).json({
					status: statusMessage,
					data: newUser,
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
	generateAccessToken: (user) => {
		return jwt.sign(
			{
				id: user.id,
				roleId: user.roleId,
			},
			process.env.JWT_ACCESS_KEY,
			{
				expiresIn: '1d',
			},
		);
	},
	// generateRefreshToken: (user) => {
	// 	return jwt.sign(
	// 		{
	// 			id: user.id,
	// 			roleId: user.roleId,
	// 		},
	// 		process.env.JWT_REFRESH_KEY,
	// 		{
	// 			expiresIn: '365d',
	// 		},
	// 	);
	// },
	login: async (req, res) => {
		const { status, statusMessage, user } = await userServices.loginUser(req.body);
		if (!status) {
			res.status(404).json(statusMessage);
		} else {
			const accessToken = authController.generateAccessToken(user);
			// const refreshToken = authController.generateRefreshToken(user);
			// await db.RefreshToken.create({
			// 	refresh_token: refreshToken,
			// });
			// res.cookie('refreshToken', refreshToken, {
			// 	httpOnly: true,
			// 	secure: false,
			// 	path: '/',
			// 	sameSite: 'strict',
			// });
			delete user.password;
			res.status(200).json({
				status: statusMessage,
				data: {
					...user,
					accessToken,
				},
			});
		}
	},
	// refreshToken: async (req, res) => {
	// 	const refreshToken = req.cookies.refreshToken;
	// 	if (!refreshToken) {
	// 		return res.status(401).json("You're not authenticated");
	// 	}
	// 	const refreshTokenExist = await db.RefreshToken.findOne({
	// 		where: { refresh_token: refreshToken },
	// 		raw: true,
	// 	});
	// 	if (refreshTokenExist == null) {
	// 		return res.status(403).json('Refresh token is not valid');
	// 	}
	// 	jwt.verify(refreshToken, process.env.JWT_REFRESH_KEY, async (err, user) => {
	// 		if (err) {
	// 			return res.status(403).json('Refresh token is not valid');
	// 		}
	// 		// create new access token và refresh token

	// 		await db.RefreshToken.destroy({ where: { refresh_token: refreshToken } });

	// 		const newAccessToken = authController.generateAccessToken(user);
	// 		const newRefreshToken = authController.generateRefreshToken(user);

	// 		await db.RefreshToken.create({
	// 			refresh_token: newRefreshToken,
	// 		});
	// 		res.cookie('refreshToken', newRefreshToken, {
	// 			httpOnly: true,
	// 			secure: false,
	// 			path: '/',
	// 			sameSite: 'strict',
	// 		});
	// 		res.status(200).json({
	// 			newAccessToken: newAccessToken,
	// 		});
	// 	});
	// },
	logout: async (req, res) => {
		// res.clearCookie('refreshToken');
		// await db.RefreshToken.destroy({
		// 	where: {
		// 		refresh_token: req.cookies.refreshToken,
		// 	},
		// });
		res.status(200).json({ status: 'Logout Succeed' });
	},
};
export default authController;
