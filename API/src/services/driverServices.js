import db from '../models/index';

const driverServices = {
	listDriver: async (req) => {
		return new Promise(async (resolve, reject) => {
			try {
				let drivers = await db.Driver.findAll();
				resolve({
					status: true,
					statusMessage: 'Get list driver successfully.',
					data: drivers,
				});
			} catch (error) {
				reject(error);
			}
		});
	},

  createDriver: async (user, data) => {
    return new Promise(async (resolve, reject) => {
			try {
        let attributes = Object.assign(data, {userId: user.id})
				let driver = await db.Driver.create(attributes);
				resolve({
					status: true,
					statusMessage: 'Create driver successfully.',
					data: driver,
				});
			} catch (error) {
				reject(error);
			}
		});
  },

  destroyDriver: async (id) => {
    return new Promise(async (resolve, reject) => {
			try {
				let driver = await db.Driver.destroy({where: {id: id}});
        if (driver == 1){
          resolve({
            status: true,
            statusMessage: 'Destroy driver successfully.',
            data: driver,
          });
        } else {
          resolve({
            status: false,
            statusMessage: 'Driver not present',
          })
        }
			} catch (error) {
				reject(error);
			}
		});
  },
};
export default driverServices;
