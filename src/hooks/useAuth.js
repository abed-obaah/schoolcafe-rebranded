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
