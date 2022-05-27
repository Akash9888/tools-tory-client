import React from "react";
import Loader from "../../Components/Loader";

import ToolCard from "../../Components/ToolCard";
import useFetch from "../../CustomHooks/useFetch";

const HomeToolCards = () => {
    const { isLoading, error, data } = useFetch(
        `https://aqueous-anchorage-06068.herokuapp.com/api/tool/fetch-tools`
    );

    if (isLoading) {
        return <Loader />;
    }

    if (error) {
        console.log(error.message);
    }
    let tools = [];
    if (data) {
        // console.log(data.data.reverse().slice(0, 6));
        tools = [...data.data.reverse().slice(0, 6)];
        console.log(tools);
    }
    return (
        <div>
            <h1 className="text-2xl font-bold text-center text-black my-5">
                Featured Tools
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
                {tools?.map((data) => (
                    <ToolCard key={data._id} data={data} />
                ))}
            </div>
        </div>
    );
};

export default HomeToolCards;
