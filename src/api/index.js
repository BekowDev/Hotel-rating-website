import axios from "axios";

const urls = "http://172.20.10.2:5000/api";
// const urls = "http://192.168.1.72:5000/api";

const defaultConfig = {
    baseURL: urls,
    headers: {
        "Content-Type": "application/json",
    },
};

export const DefaultAPIInstance = axios.create(defaultConfig);

const authConfig = {
    baseURL: urls,
    headers: {
        "Content-Type": "application/json",
    },
};
export const AuthConfigAPIInstance = axios.create(authConfig);

// interceptors

DefaultAPIInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        if (token) config.headers.Authorization = `Bearer ${token}`;

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

DefaultAPIInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        // if (error.response && error.response.status === 403) {
        //     localStorage.clear();
        //     window.location.href = "/login";
        // }
        return Promise.reject(error);
    }
);
