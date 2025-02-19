import app from "./src/app";
import dotenv from 'dotenv';

// Upload .env file
dotenv.config();

// environment variables
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("listen on port 3001");
});