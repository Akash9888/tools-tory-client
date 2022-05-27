import axios from "axios";
import React from "react";
import { useQuery } from "react-query";

const useFetchUser = (url) => {
    const {
        isLoading,
        error: fetchError,
        data,
        isFetching,
    } = useQuery("fetch-user", () => {
        return axios.get(url, {
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        });
    });
    return { isLoading, error: fetchError, data, isFetching };
};

export default useFetchUser;
