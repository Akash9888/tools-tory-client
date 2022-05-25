import React from "react";

import ToolCard from "../../Components/ToolCard";
import useFetch from "../../CustomHooks/useFetch";

const HomeToolCards = () => {
    const { isLoading, error, data, isFetching } = useFetch(
        `http://localhost:5000/api/fetch-tools`
    );

    if (isLoading) return "Loading...";

    if (error) return "An error has occurred: " + error.message;
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-2">
            {data?.data.map((data) => (
                <ToolCard key={data._id} data={data} />
            ))}
        </div>
    );
};

export default HomeToolCards;
