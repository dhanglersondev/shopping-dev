import axios from "axios";

// json-server --watch db.axios
export const api = axios.create({
   baseURL: "http://localhost:3000"
})