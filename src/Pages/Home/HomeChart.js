import React from "react";
import { useAlert } from "react-alert";
import {
    CartesianGrid,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";
import useFetch from "../../CustomHooks/useFetch";
import Loader from "../../Components/Loader";

const HomeChart = () => {
    const alert = useAlert();

    const { isLoading, error, data } = useFetch(
        `https://aqueous-anchorage-06068.herokuapp.com/api/tool/fetch-tools`
    );

    if (isLoading) {
        return <Loader />;
    }

    if (error) {
        alert.error(error.message);
    }

    return (
        <div style={{ width: "100%" }}>
            <h1 className="text-center text-3xl my-10">Our Tools Quantity</h1>
            <ResponsiveContainer width="100%" height={400}>
                <LineChart
                    width={500}
                    height={200}
                    data={data?.data}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}>
                    <CartesianGrid strokeDasharray="2 2" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line
                        connectNulls
                        type="monotone"
                        dataKey="quantity"
                        stroke="#8884d8"
                        fill="#8884d8"
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default HomeChart;
