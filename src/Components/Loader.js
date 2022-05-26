import React from "react";

const Loader = () => {
    return (
        <div className="container w-full md:w-[50%] mx-auto my-5 p-2">
            <div className="w-16 h-16 border-4 border-dashed rounded-full my-5 animate-spin border-pink-600"></div>
        </div>
    );
};

export default Loader;
