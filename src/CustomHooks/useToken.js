import axios from "axios";
import React, { useState } from "react";

const [data, setData] = useState(null);
const [error, setError] = useState(null);
const [loading, setLoading] = useState(false);

const useToken = () => {
    const getToken = (url, updatedData) => {
        setLoading(true);
        axios
            .put(url, updatedData)

            .then((response) => {
                setData(response.data);

                console.log(data);
            })
            .catch((error) => {
                setError(error);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return { getToken, data, error, loading };
};

export default useToken;
