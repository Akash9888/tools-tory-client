import axios from "axios";
import { useState } from "react";

const useUpdate = () => {
    const [data, setData] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const saveupdatedData = (url, updatedData) => {
        console.log(updatedData);
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

    return { saveupdatedData, loading, error, data };
};

export default useUpdate;
