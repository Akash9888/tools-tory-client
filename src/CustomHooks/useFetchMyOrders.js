import { useQuery } from "react-query";
import axios from "axios";
const useFetchMyOrders = (url) => {
    const { isLoading, error, data, isFetching } = useQuery(
        "fetch-my-orders",
        () => {
            return axios.get(url);
        },
        {
            refetchInterval: 3000,
            // refetchOnWindowFocus: true,
        }
    );
    return { isLoading, error, data, isFetching };
};

export default useFetchMyOrders;
