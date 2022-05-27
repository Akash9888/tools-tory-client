import { useQuery } from "react-query";
import axios from "axios";
const useFetch = (url) => {
    const { isLoading, error, data, isFetching } = useQuery(
        "fetch-data",
        () => {
            return axios.get(url, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem(
                        "accessToken"
                    )}`,
                },
            });
        },
        {
            // refetchInterval: 3000,
            // refetchOnWindowFocus: true,
        }
    );
    return { isLoading, error, data, isFetching };
};

export default useFetch;
