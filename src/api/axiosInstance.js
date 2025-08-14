import axios from "axios";

// Local
// For Images
export const mediaURL = `http://127.0.0.1:8000/`;
// For API requests
const baseURL = `http://127.0.0.1:8000/api`;

export const ASAMS_API = axios.create({ baseURL });
