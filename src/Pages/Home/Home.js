import React from "react";
import BusinessSummary from "./BusinessSummary";
import Contact from "./Contact";
import HomeCarousel from "./HomeCarousel";
import HomeToolCards from "./HomeToolCards";
import UserReview from "./UserReview";

const Home = () => {
    return (
        <div>
            <HomeCarousel />
            <BusinessSummary />
            <UserReview />
            <HomeToolCards />
            <Contact />
        </div>
    );
};

export default Home;
