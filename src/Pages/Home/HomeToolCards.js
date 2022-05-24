import React from "react";
import ToolCard from "../../Components/ToolCard";

const HomeToolCards = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-2">
            <ToolCard />
            <ToolCard />
            <ToolCard />
            <ToolCard />
            <ToolCard />
        </div>
    );
};

export default HomeToolCards;
