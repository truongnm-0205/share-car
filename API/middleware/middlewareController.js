const jwt = require( 'jsonwebtoken');
const middlewareController = {
	verifyToken: (req, res, next) => {
		const token = req.headers.token;
		if (token) {
			const accessToken = token.split(' ')[1];
			jwt.verify(accessToken, process.env.JWT_ACCESS_KEY, (err, user) => {
				if (err) {
					return res.status(403).json({ status: 'Token is not valid' });
				}
				// Sau khi giải mã accesstoken sẽ đc object là id và roleId
				// gán user này vào req
				req.user = user;
				next();
			});
		} else {
			return res.status(401).json({ status: "You're not authenticated" });
		}
	},
	verifyTokenAndAdminAuth: (req, res, next) => {
		middlewareController.verifyToken(req, res, () => {
			if (req.user.roleId == 1) {
				next();
			} else {
				res.status(403).json({ status: "You're not allowed!" });
			}
		});
	},
	verifyTokenAndIsYour: (req, res, next) => {
		middlewareController.verifyToken(req, res, () => {
			// check id trong access token có giống id trong current id trong redux k
			// update profile get profile
			if (req.user.id == req.params.id) {
				next();
			} else {
				res.status(403).json({ status: "You're not allowed!" });
			}
		});
	},
};
module.exports= middlewareController;
