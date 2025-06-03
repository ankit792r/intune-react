import axios, { AxiosError, type AxiosRequestConfig } from "axios";

export interface ApiResponse<T> {
    success: boolean;
    message: string;
    error: string;
    data?: T;
}

const axiosInstance = axios.create({
    baseURL: "http://localhost:8080",
    withCredentials: true
});

axiosInstance.interceptors.response.use(
    (response) => response.data,
    (error: AxiosError<ApiResponse<unknown>>) => {
        if (error.response) {
            const errorMessage =
                error.response.data?.message ||
                `HTTP error! status: ${error.response.status}`;
            throw new Error(errorMessage);
        } else if (error.request)
            throw new Error("No response received from server");
        else
            throw new Error("Error setting up the request");
    }
);


const api = {
    post: async <T>(
        endpoint: string,
        data: unknown,
        config?: AxiosRequestConfig
    ): Promise<ApiResponse<T>> => {
        return axiosInstance.post<unknown, ApiResponse<T>>(endpoint, data, config);
    },

    get: async <T>(
        endpoint: string,
        config?: AxiosRequestConfig
    ): Promise<ApiResponse<T>> => {
        return axiosInstance.get<unknown, ApiResponse<T>>(endpoint, config);
    },

    put: async <T>(
        endpoint: string,
        data: unknown,
        config?: AxiosRequestConfig
    ): Promise<ApiResponse<T>> => {
        return axiosInstance.put<unknown, ApiResponse<T>>(endpoint, data, config);
    },

    patch: async <T>(
        endpoint: string,
        data: unknown,
        config?: AxiosRequestConfig
    ): Promise<ApiResponse<T>> => {
        return axiosInstance.patch<unknown, ApiResponse<T>>(endpoint, data, config);
    },

    delete: async <T>(
        endpoint: string,
        config?: AxiosRequestConfig
    ): Promise<ApiResponse<T>> => {
        return axiosInstance.delete<unknown, ApiResponse<T>>(endpoint, config);
    }
};

export default api