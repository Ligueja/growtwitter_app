import axios from "axios";

export const growtwitterApi = axios.create({
  baseURL: "http://localhost:8080",
});
