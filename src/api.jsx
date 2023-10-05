import axios from "axios";

const api = axios.create({
    baseURL: "http://10.18.32.17:8080/"
    });

export default api;