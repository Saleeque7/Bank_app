import { config } from "../config/config";
import axios from "axios";
const userUrl = `${config.VITE_AXIOS_API}/api`;
const axiosInstance = (Url) => {
  return axios.create({
    Url,
    headers: { "Content-Type": "application/json" },
    withCredentials: true,
  });
};
export const userAxios = axiosInstance(userUrl);
