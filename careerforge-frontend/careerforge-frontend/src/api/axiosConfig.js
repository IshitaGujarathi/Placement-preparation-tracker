import axios from "axios";

const axiosConfig = axios.create({
  baseURL:
    "https://placement-preparation-tracker-production-b4ed.up.railway.app",
  headers: {
    "Content-Type": "application/json",
  },
});

console.log("API URL:", axiosConfig.defaults.baseURL);

export default axiosConfig;