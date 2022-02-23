import axios from "axios";

// import dotenv from "dotenv";

// dotenv.config({
//     path: `.env.${process.env.NODE_ENV}`
// })

// const API_URL = process.env.API_URL;
const API_URL = 'http://localhost:8000';

console.log('API_URL', API_URL);

const api = axios.create({
  baseURL: API_URL,
});

export default api;