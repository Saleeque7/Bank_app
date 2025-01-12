import pg from "pg";
const { Pool } = pg;
import { config } from "./config.js";


 export const pool = new Pool({
  host: config.PSQL_HOST,
  user: config.PSQL_USER,
  port: config.PSQL_PORT,
  password: config.PSQL_PASSWORD,
  database: config.PSQL_DATABASE,
  max: 10, 
  idleTimeoutMillis: 30000, 
  connectionTimeoutMillis: 2000, 
});


export const connectDb = async (retries = 5) => {
  while (retries > 0) {
    try {
      await pool.query("SELECT 1"); 
      console.log("Database connection success");
      return;
    } catch (error) {
      console.error("Error connecting to the database:", error);
      retries--;
      if (retries > 0) {
        console.log(`Retrying in 5 seconds... (${retries} retries left)`);
        await new Promise((res) => setTimeout(res, 5000));
      } else {
        console.error("Failed to connect to the database after multiple attempts.");
        throw error;
      }
    }
  }
};


const shutdown = async () => {
  console.log("Shutting down the server...");
  await pool.end();
  console.log("Database connection closed.");
  process.exit(0);
};

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);
export default pool;
