import axios, { AxiosRequestConfig } from "axios";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";

const api = axios.create({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}`,
});

export const usePost = <T, P>(endpoint: string) => {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<number | null>(null);

    const postData = async (postData: P, config?: AxiosRequestConfig) => {
        setData(null);
        setLoading(true);
        setError(null);

        try {
            const response = await api({
                url: endpoint,
                method: 'POST',
                data: postData,
                headers: {
                    'Content-Type': 'application/json',
                    ...config?.headers
                },
                ...config
            });
            setData(response.data);
        } catch (error: any) {
            setError(error.response.status ?? 500)
        } finally {
            setLoading(false);
        }
    };

    return { data, loading, error, postData };
}

export const useGet = <T>(endpoint: string, config?: AxiosRequestConfig) => {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<number | null>(null);

    const getData = async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await api({
                url: endpoint,
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${Cookies.get('Autorization')}`,
                    ...config?.headers
                },
                ...config
            });
            setData(response.data);
        } catch (error: any) {
            setError(error.response.status ?? 500)
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getData();
    }, [])

    return { data, loading, error, getData };
}
