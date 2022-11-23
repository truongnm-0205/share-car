import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
dotenv.config();

const app = express();

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.get('/', function (req, res) {
	res.send('Hello World!');
});

app.listen(process.env.PORT, () => {
	console.log(`Server is running on: http:localhost:${process.env.PORT}`);
});
