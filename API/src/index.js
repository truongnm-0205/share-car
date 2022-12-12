import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import connectDB from './config/connectDB';
import authRoute from './routes/auth';
import userRoute from './routes/user';
import userCarRoute from './routes/userCar';
import adminCarRoute from './routes/adminCar';
import allCodeRoute from './routes/allCode';

dotenv.config();

const app = express();

// var allowCrossDomain = function (req, res, next) {
// 	res.header('Access-Control-Allow-Origin', '*');
// 	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
// 	res.header('Access-Control-Allow-Headers', 'Content-Type');
// 	next();
// };
// const corsOptions = {
// 	origin: 'http://localhost:8080/',
// 	optionsSuccessStatus: 200,
// 	credentials: true,
// };

app.use(cors());
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header(
		'Access-Control-Allow-Headers',
		'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method',
	);
	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
	res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
	next();
});
app.use(cookieParser());
app.use(express.json());

app.use('/v1/auth', authRoute);
app.use('/v1/user', userRoute);
app.use('/v1/user-car', userCarRoute);
app.use('/v1/admin-car', adminCarRoute);
app.use('/v1/all-code', allCodeRoute);

connectDB();

app.get('/', function (req, res) {
	res.send('Hello World!');
});

app.listen(process.env.PORT, () => {
	console.log(`Server is running on: http:localhost:${process.env.PORT}`);
});
