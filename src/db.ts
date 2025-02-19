import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load the .env file
dotenv.config();

// Defining the type of environment variables
interface ProcessEnv {
  DB_URI: string; // Defines that DB_URI will always be a text string
}

// Get the database connection URL from environment variables
const dbUri = process.env.DB_URI;

if (!dbUri) {
  throw new Error('La variable de entorno DB_URI no está definida');
}

const connectToDatabase = async () => {
  try {
    await mongoose.connect(dbUri);
    console.log('✅ Conectado a MongoDB');
  } catch (err) {
    console.error('❌ Error conectando a MongoDB', err);
  }
};

export default connectToDatabase;
