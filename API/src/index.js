import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import connectDB from './config/connectDB';
import authRoute from './routes/auth';
import userRoute from './routes/user';
import driverRoute from './routes/driver';

dotenv.config();

const app = express();

app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use('/v1/auth', authRoute);
app.use('/v1/user', userRoute);
app.use('/v1/driver', driverRoute);

connectDB();

app.get('/', function (req, res) {
	res.send('Hello World!');
});

app.listen(process.env.PORT, () => {
	console.log(`Server is running on: http:localhost:${process.env.PORT}`);
});


