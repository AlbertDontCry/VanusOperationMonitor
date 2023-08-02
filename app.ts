import dotenv from "dotenv";
import config from "./config";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";

dotenv.config();

const app = express();
const port = config.PORT;

app.use(express.json());
app.use(cors());

const connectToDB = () => {
  const connectionString = config.DB_CONNECTION;
  
	if (!connectionString) {
    console.error("connection string is undefined");
		process.exit(1);
	}
	const db = mongoose.connection;
	db.on("connected", () => {
    console.log(`DB connected, ${connectionString}`);
	});
	db.on("error", (error) => {
    console.error(error);
		process.exit(2);
	});
	db.on("disconnected", () => {
    console.log("db disconnected");
	});
  
	return mongoose.connect(connectionString);
};

connectToDB();

app.listen(port, '127.0.0.1', () => {
  console.log(`Server is listen on port ${port}`);
});


import {Request, Response} from "express";
import { test2 } from "./test/test2"
// import { test } from "./test"

// test connection model
app.post('/connection', async (req:Request, res:Response) => {
  try {
    const connection = test2(req);
    res.send(connection);
  } catch (error) {
    res.status(500).send(error);
  }
});

// test active_user model
// app.post('/user', async (req:Request, res:Response) => {
//   try {
//     const user = test1(req);
//     res.send(user);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });