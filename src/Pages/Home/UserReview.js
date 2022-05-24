import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import ReviewCard from "../../Components/ReviewCard";
const UserReview = () => {
    const responsive = {
        0: { items: 1 },
        768: { items: 3 },
        180: { items: 5 },
    };
    const items = [
        <ReviewCard />,
        <ReviewCard />,
        <ReviewCard />,
        <ReviewCard />,
        <ReviewCard />,
        <ReviewCard />,
    ];
    return (
        <div className="container w-full md:max-width-[1380px] mx-auto p-3 md:p-6 ">
            <h1 className="text-center text-xl font-bold">
                What Our Clients Says!
            </h1>
            <AliceCarousel
                autoWidth
                mouseTracking
                responsive={responsive}
                controlsStrategy="alternate"
                items={items}
            />
        </div>
    );
};

export default UserReview;
