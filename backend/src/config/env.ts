import dotenv from "dotenv";

dotenv.config();

const requiredEnv = (name: string): string => {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Environment variable ${name} is required`);
  }

  return value;
};

const port = Number(process.env.PORT);

if (Number.isNaN(port)) {
  throw new Error("PORT must be a valid number");
}

export const config = {
  nodeEnv: process.env.NODE_ENV || "development",
  port,
  mongodbUri: requiredEnv("MONGODB_URI"),
  clientUrl: requiredEnv("CLIENT_URL"),
};