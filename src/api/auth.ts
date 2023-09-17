import axios from "axios";
import { LoginType, RegisterType } from "../types/auth";
const baseUrl = import.meta.env.VITE_APP_BASE_URL;
const loginUrl = "api/auth/login";
const registerUrl = "api/auth/register";

export const login = async (body: LoginType) => {
  return await axios.post(`${baseUrl}/${loginUrl}`, body);
};

export const register = async (body: RegisterType) => {
  return await axios.post(`${baseUrl}/${registerUrl}`, body);
};
