import axios from "axios";
import { useQuery } from "react-query";

const useAdmin = (url) => {
    const { isLoading, error, data } = useQuery("fetch-admin", () => {
        return axios.get(url, {
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        });
    });
    return { isLoading, error, data };
};

export default useAdmin;
