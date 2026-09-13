import mongoose from 'mongoose';
import { config } from './env';

export const connectDB = async (): Promise<void> => {
  const mongoUri = config.mongodbUri|| 'mongodb://localhost:27017/asset-management';

  try {
    const conn = await mongoose.connect(mongoUri, {
      serverSelectionTimeoutMS: 5000,
    });
    console.log(`[Database] MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`[Database] MongoDB Connection Error: ${(error as Error).message}`);
    console.warn(`[Database] Running without MongoDB. Start MongoDB service locally or update MONGODB_URI in .env when ready.`);
  }
};