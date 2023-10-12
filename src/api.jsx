import axios from "axios";

const api = axios.create({
    baseURL: "http://10.18.33.67:8080/"
    });

export default api;