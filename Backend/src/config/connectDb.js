import pg from "pg";
const { Pool } = pg
import { config } from "./config.js";


const client = new Pool({
    host: config.PSQL_HOST,
    user: config.PSQL_USER,
    port: config.PSQL_PORT,
    password: config.PSQL_PASSWORD,
    database: config.PSQL_DATABASE
})

export const connectDb = async (retries = 5) => {
    try {
        await client.connect()
        console.log("database connection success");
        return; 
    } catch (error) {

        console.error("Error connecting to the database:", error);
        if (retries > 0) {
            console.log(`Retrying in 5 seconds... (${retries} retries left)`);
            setTimeout(() => {
                connectDb(retries - 1);
            }, 5000);
        } else {
            console.error("Failed to connect to the database after multiple attempts.");
        }
    }
} 

const shutdown = async () => {
    console.log("Shutting down the server...");
    await client.end();  
    console.log("Database connection closed.");
    process.exit(0); 
};


process.on("SIGINT", shutdown);