import express from "express";
import morgan from "morgan";
import cors from "cors";
import mainRouter from "./Routes/index";
import connectToDatabase from "./db";

const app = express();

// Middleware to enable CORS
app.use(cors()); // Allows requests from different origins

// Middleware for logging HTTP requests to the console
app.use(morgan("dev")); // Records request information in 'dev' format

// Middleware for parsing the body of JSON requests
app.use(express.json()); // Allows the server to understand JSON data in requests

connectToDatabase();

app.use(mainRouter);

export default app;