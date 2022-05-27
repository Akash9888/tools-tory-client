import { useQuery } from "react-query";
import axios from "axios";
const useFetchMyOrders = (url) => {
    const { isLoading, error, data, isFetching } = useQuery(
        "fetch-my-orders",
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
            refetchInterval: 1000,
            // refetchOnWindowFocus: true,
        }
    );
    return { isLoading, error, data, isFetching };
};

export default useFetchMyOrders;
