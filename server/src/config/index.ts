import dotenv from "dotenv";
import * as log4js from "log4js";

// env
dotenv.config();

const config = {
  env: process.env.NODE_ENV || "dev",
  azureOrigin: process.env.EXPRESS_API_URL || "dev",
  supabaseURL: process.env.SUPABASE_URL || "none",
  supabaseAnonKey: process.env.SUPABASE_ANON_KEY || "none",
};

export { config };
