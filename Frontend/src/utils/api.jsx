import { config } from "../config/config";

const baseUrl = `${config.VITE_AXIOS_API}/api`
export const createUserApi = `${baseUrl}/users`