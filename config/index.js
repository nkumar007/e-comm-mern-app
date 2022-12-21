import dotenv from "dotenv";

dotenv.config();

const config = {
  JWT_SECRET: process.env.JWT_SECRET,
  JSWT_EXPIRY: process.env.JSWT_EXPIRY || "30d",
};

export default config;
