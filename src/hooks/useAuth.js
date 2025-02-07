import { useMutation } from "@tanstack/react-query";
import API from "../api/api";

export const useRegister = () => {
  return useMutation({
    mutationFn: async (formData) => {
      const { data } = await API.post("/users/register", formData);
      return data;
    },
    onSuccess: (data) => {
      console.log("Registration Successful:", data);
    },
    onError: (error) => {
      console.error("Registration Failed:", error.response?.data || error.message);
    },
  });
};


export const useLogin = () => {
  return useMutation({
    mutationFn: async ({ email, password }) => {
      const { data } = await API.post("/users/login", { email, password });
      return data;
    },
    onSuccess: (data) => {
      console.log("Login Successful:", data);
      // You can store the token in AsyncStorage or Redux here if needed
    },
    onError: (error) => {
      console.error("Login Failed:", error.response?.data || error.message);
    },
  });
};