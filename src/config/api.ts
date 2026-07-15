import axios from "axios";
import appSettings from "./appSettings";

const api = axios.create({
  baseURL: appSettings.apiBaseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;