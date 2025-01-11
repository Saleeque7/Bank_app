import dotenv from 'dotenv'
dotenv.config()
export const config = {
    PSQL_HOST:process.env.PSQL_HOST,
    PSQL_PORT:process.env.PSQL_PORT,
    PSQL_USER:process.env.PSQL_USER,
    PSQL_DATABASE:process.env.PSQL_DATABASE,
    PSQL_PASSWORD:process.env.PSQL_PASSWORD,
    PORT:process.env.PORT
}