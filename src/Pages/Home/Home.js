import React from "react";
import BusinessSummary from "./BusinessSummary";
import Contact from "./Contact";
import HomeCarousel from "./HomeCarousel";
import HomeToolCards from "./HomeToolCards";

import UserReview2 from "./UserReview2";

const Home = () => {
    return (
        <div>
            <HomeCarousel />
            <div className="container w-full md:max-w-[1340px] mx-auto p-6">
                <HomeToolCards />
                <BusinessSummary />

                <UserReview2 />
            </div>

            <Contact />
        </div>
    );
};

export default Home;
