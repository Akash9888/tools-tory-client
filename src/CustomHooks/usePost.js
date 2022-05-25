import axios from "axios";
import { useState } from "react";

const usePost = (url) => {
    const [data, setData] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const savePurchaseData = (purchaseData) => {
        setLoading(true);
        axios
            .post(url, purchaseData)

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

    return { savePurchaseData, loading, error, data };
};

export default usePost;
