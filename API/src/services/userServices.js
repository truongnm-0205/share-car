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
				// console.log(data);
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
};
export default userServices;
