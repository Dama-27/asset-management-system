import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Load environment variables from .env
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const CLIENT_URL = process.env.CLIENT_URL || 'http://localhost:5173';

// Core Middleware
app.use(cors({
  origin: CLIENT_URL,
  credentials: true,
}));
app.use(express.json());

// Root Welcome Endpoint
app.get('/', (_req: Request, res: Response) => {
  res.json({
    message: 'Welcome to Asset Management API',
    version: '1.0.0',
    documentation: '/api/v1/health',
  });
});

// Start HTTP Server & Connect to DB
app.listen(PORT, () => {
  console.log(`[Server] Express server running on http://localhost:${PORT}`);
//   connectDB();
});
