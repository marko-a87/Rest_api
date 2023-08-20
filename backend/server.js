import express from "express";
import dotenv from "dotenv";
import connectDB from "../backend/config/db.js";
import userRoutes from "../backend/routes/userRoutes.js";
dotenv.config();
const app = express();

//Able to parse json requests
app.use(express.json());

//Loads user routes into the server
app.use("/", userRoutes);
//Sets the port for the server
const PORT = process.env.PORT || 3000;

//Connects to the database
connectDB();
//Listens to the port for the server.

app.listen(PORT, () => console.log(`Server connected to: ${PORT}`));
