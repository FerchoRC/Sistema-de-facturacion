import axios from "axios";
import { BASE_URL } from "./apiPaths";

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 80000,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
});

// Interceptor de peticion
axiosInstance.interceptors.request.use(
    (config) => {
        const accessToken = localStorage.getItem("token");
        if (accessToken) { 
            config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Interceptor de respuesta
axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        // Manejador de errores globales
        if (error.response) {
            if (error.response.status === 500) {
                console.error("Error del servidor, Intenta mas tarde");
            }
        } else if (error.code === "ECONNABORTED"){
            console.error("Vuelve a intentar");
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;