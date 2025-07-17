import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const MONGO_URI = "mongodb+srv://root:root123@cluster0.1nx1i.mongodb.net/Kindle?retryWrites=true&w=majority&appName=Cluster0";
export async function connectDB() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection failed:', error);
    process.exit(1); 
  }
}

// mongoose.connect(process.env.MONGO_URI);
