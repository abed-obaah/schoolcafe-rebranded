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
     
    },
    onError: (error) => {
      console.error("Login Failed:", error.response?.data || error.message);
    },
  });
};

export const useAuthCheck = () => {
  return useMutation({
    mutationFn: async (token) => {
      const { data } = await API.get("/users/authenticate", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return data;
    },
    onSuccess: (data) => {
      console.log("User Authenticated:", data);
    },
    onError: (error) => {
      console.error("Auth Check Failed:", error.response?.data || error.message);
    },
  });
};

export const useVerifyEmail = () => {
  return useMutation({
    mutationFn: async (email_otp) => {
      const { data } = await API.post("/users/verify", { email_otp });
      return data;
    },
    onSuccess: (data) => {
      console.log("Email Verification Successful:", data);
    },
    onError: (error) => {
      console.error("Email Verification Failed:", error.response?.data || error.message);
    },
  });
};