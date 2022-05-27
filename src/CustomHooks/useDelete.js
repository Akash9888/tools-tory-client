import axios from "axios";
import React, { useState } from "react";

const useDelete = () => {
    const [data, setData] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const orderDeleteRequest = (url) => {
        axios
            .delete(url, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem(
                        "accessToken"
                    )}`,
                },
            })
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
    return { orderDeleteRequest, loading, error, data };
};

export default useDelete;
