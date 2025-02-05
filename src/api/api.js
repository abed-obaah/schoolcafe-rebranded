import axios from "axios";

const API = axios.create({
  // baseURL: "https://api.schoolcafe.ng", //THIS API URL CAN BE SORTED LATER
  baseURL: "https://afe-52zn.onrender.com/", // USE THIS API URL FOR NOW
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  withCredentials: true, // cookies if authentication requires it
});

export default API;
