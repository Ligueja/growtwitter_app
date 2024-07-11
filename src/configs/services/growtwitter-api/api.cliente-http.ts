import axios from "axios";

export const growtwitterApi = axios.create({
  baseURL: "http://localhost:8080",
});

export interface ResponseAPI<T> {
  ok: boolean;
  message: string;
  errors?: Array<{
    field: string;
    message: string;
  }>;
  data?: T;
  pagination?: {
    limit: number;
    page: number;
    count: number;
    totalPages: number;
  };
}
