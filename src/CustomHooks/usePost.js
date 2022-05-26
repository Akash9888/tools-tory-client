import axios from "axios";
import { useState } from "react";

const usePost = (url) => {
    const [data, setData] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const savePostData = (postData) => {
        console.log(postData);
        setLoading(true);
        axios
            .post(url, postData)

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

    return { savePostData, loading, error, data };
};

export default usePost;
