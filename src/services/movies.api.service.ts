import axios from "axios";
import {baseURL, urls} from "@/constants/urls";
import {accessToken} from "@/constants/token";
import {ApiResponse, Movie} from "@/models/models";

const axiosInstance = axios.create({
    baseURL,
});

axiosInstance.interceptors.request.use(
    (request) => {
        request.headers.Authorization = `Bearer ${accessToken}`;
        return request;
    },
    (error) => {
        console.error("Request error:", error);
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response) {
            console.error("Response error:", error.response.data);
            console.error("Status:", error.response.status);
            console.error("Headers:", error.response.headers);
        } else if (error.request) {
            console.error("Request error: No response received", error.request);
        } else {
            console.error("Error setting up request:", error.message);
        }
        return Promise.reject(error);
    }
);

export {axiosInstance};

const moviesService = {
    getMovies: async (page: number): Promise<ApiResponse<Movie[]> | null> => {
        try {
            const {data} = await axiosInstance.get<ApiResponse<Movie[]>>(urls.getAllMovies, {
                params: {page},
            });
            return data;
        } catch (error) {
            console.error("Something went wrong with getting movies", error);
            if (axios.isAxiosError(error)) {
                if (error.response) {
                    console.error(`Status: ${error.response.status}`);
                    console.error(`Message: ${error.response.data?.message || "Unknown error"}`);
                } else {
                    console.error("No response received from server.");
                }
            } else {
                console.error("Unexpected error:", error);
            }

            return null;
        }
    },

    getSearchedMovies: async (query: string, page: number): Promise<ApiResponse<Movie[]> | null> => {
        try {
            const {data} = await axiosInstance.get<ApiResponse<Movie[]>>(urls.getSearchedMovies, {
                params: {query, page},
            });
            return data;
        } catch (error) {
            console.error("Something went wrong with getting searched movies", error);

            if (axios.isAxiosError(error)) {
                if (error.response) {
                    console.error(`Status: ${error.response.status}`);
                    console.error(`Message: ${error.response.data?.message || "Unknown error"}`);
                } else {
                    console.error("No response received from server.");
                }
            } else {
                console.error("Unexpected error:", error);
            }

            return null;
        }
    },
};

export {moviesService};
