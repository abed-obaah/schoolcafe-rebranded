import axios from "axios";

const API = axios.create({
  baseURL: "https://api.schoolcafe.ng", //API URL
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
  },
  withCredentials: true, // cookies if authentication requires it
});

export default API;
