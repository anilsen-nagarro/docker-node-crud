import mongoose from 'mongoose';
import * as fs from 'node:fs';

const mongoUser = fs.readFileSync('/run/secrets/mongo_user', 'utf8').trim();
const mongoPassword = fs.readFileSync('/run/secrets/mongo_password', 'utf8').trim();
const MONGO_URI = `mongodb://${mongoUser}:${mongoPassword}@mongo:27017/mydb?authSource=admin`;

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI as string);
    console.log('Database connected with MONGP_URI', process.env.MONGO_URI);
    
    console.log('✅ MongoDB connected');
  } catch (error) {
    console.error('❌ MongoDB connection failed', error);
    process.exit(1);
  }
};