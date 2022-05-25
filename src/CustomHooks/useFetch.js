import { useQuery } from "react-query";
import axios from "axios";
const useFetch = (url) => {
    const { isLoading, error, data, isFetching } = useQuery(
        "fetch-data",
        () => {
            return axios.get(url);
        }
    );
    return { isLoading, error, data, isFetching };
};

export default useFetch;
