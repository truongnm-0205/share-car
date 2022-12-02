import db from '../models/index';
import bcrypt from 'bcrypt';

const salt = bcrypt.genSaltSync(10);

/*
async (data) => {
		return new Promise(async (resolve, reject) => {
			try {
				console.log(data);
			} catch (error) {
				reject(error);
			}
		});
*/
const userServices = {
	createNewUser: async (data) => {
		return new Promise(async (resolve, reject) => {
			try {
				let hashed = await bcrypt.hash(data.password, salt);
				let usernameExist = await db.User.findOne({
					where: { username: data.username },
				});
				if (usernameExist) {
					return resolve({
						status: false,
						statusMessage: 'Username was already exsit.',
					});
				}
				let newUser = await db.User.create({
					username: data.username,
					password: hashed,
				});
				delete newUser.dataValues.password;
				resolve({
					status: true,
					statusMessage: 'Create new user successfully.',
					newUser: newUser.dataValues,
				});
			} catch (error) {
				reject(error);
			}
		});
	},

	loginUser: async (data) => {
		return new Promise(async (resolve, reject) => {
			try {
				let user = await db.User.findOne({
					where: { username: data.username },
					raw: true,
				});
				if (user == null) {
					resolve({
						status: false,
						statusMessage: 'Wrong username!',
					});
				}
				let validPassword = await bcrypt.compare(data.password, user.password);
				if (!validPassword) {
					resolve({
						status: false,
						statusMessage: 'Wrong password!',
					});
				}
				if (user && validPassword) {
					resolve({
						status: true,
						statusMessage: 'Login successfully',
						user,
					});
				}
			} catch (error) {
				reject(error);
			}
		});
	},

	profileUser: async (data) => {
		return new Promise(async (resolve, reject) => {
			try{
				let user = await db.User.findByPk(data.id);
				if (user) {
					return resolve({
						status: true,
						statusMessage: 'Get profile user successfully.',
						data: user,
					});
				}
				resolve({
					status: false,
					statusMessage: 'Error',
				});
			} catch (error) {
				reject(error);
			}
		})
	},

	updateUser: async (user, data) => {
		return new Promise(async (resolve, reject) => {
			try{
				delete data.password
				const userId = user.id
				let current_user = await db.User.update(data, { where: { id: userId }});
				if (current_user) {
					current_user = await db.User.findByPk(userId);
					resolve({
						status: true,
						statusMessage: 'Update profile user successfully.',
						data: current_user,
					});
				} 
				resolve({
					status: false,
					statusMessage: 'Error',
				});
			} catch (error) {
				reject(error);
			}
		})
	},
};
export default userServices;
