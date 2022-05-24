import React from "react";
import BusinessSummary from "./BusinessSummary";
import HomeCarousel from "./HomeCarousel";
import UserReview from "./UserReview";

const Home = () => {
    return (
        <div>
            <HomeCarousel />
            <BusinessSummary />
            <UserReview />
        </div>
    );
};

export default Home;
