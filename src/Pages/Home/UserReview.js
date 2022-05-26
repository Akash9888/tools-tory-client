import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import ReviewCard from "../../Components/ReviewCard";
import Loader from "../../Components/Loader";
import { useQuery } from "react-query";
import axios from "axios";
const UserReview = () => {
    const { isLoading, error, data, isFetching } = useQuery(
        "fetch-review",
        () => {
            return axios.get(`http://localhost:5000/api/fetch-reviews`);
        }
    );
    const responsive = {
        0: { items: 1 },
        768: { items: 3 },
        180: { items: 5 },
    };
    // array1.map(x => x * 2);
    const items = [];
    if (error) {
        console.log(error.message);
    }
    if (isLoading) {
        return <Loader />;
    }
    if (data) {
        console.log(data.data[0]);
    }
    return (
        <div className="container w-full md:max-width-[1380px] mx-auto p-3 md:p-6 ">
            <h1 className="text-center text-xl font-bold">
                What Our Clients Says!
            </h1>
            {/* {items.push(
                data?.data[0].map((data) => {
                    return <ReviewCard data={data} />;
                })
            )} */}
            {items.length > 0 && (
                <AliceCarousel
                    autoWidth
                    mouseTracking
                    responsive={responsive}
                    controlsStrategy="alternate"
                    items={items}
                />
            )}
        </div>
    );
};

export default UserReview;
