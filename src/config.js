import { config } from "dotenv";

config();
export const PORT = process.env.PORT || 3100;
export const DB_DATABASE = process.env.DB_DATABASE || "thecureapp";
export const DB_HOST = process.env.DB_HOST || "dbmysql-thecureapp.mysql.database.azure.com";
export const DB_PASSWORD = process.env.DB_PASSWORD || "Aa123456";
export const DB_PORT = process.env.DB_PORT || 3306;
export const DB_USER = process.env.DB_USER || "appadmin";
