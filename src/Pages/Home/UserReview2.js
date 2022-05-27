import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useQuery } from "react-query";
import axios from "axios";
import ReviewCard from "../../Components/ReviewCard";
import Loader from "../../Components/Loader";
import { useAlert } from "react-alert";
const UserReview2 = () => {
    const { isLoading, error, data } = useQuery("fetch-review", () => {
        return axios.get(
            `https://aqueous-anchorage-06068.herokuapp.com/api/review/fetch-reviews`
        );
    });
    const alert = useAlert();
    if (error) {
        alert.error(error.message);
    }
    if (isLoading) {
        return <Loader />;
    }

    let reviews = [];
    if (data) {
        reviews = [...data.data.reverse()];
    }
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };
    return (
        <div>
            <h1 className="text-2xl font-bold text-center text-black mb-6 mt-10">
                What Our Clients Says!
            </h1>
            <Carousel responsive={responsive}>
                {reviews?.map((data) => {
                    return <ReviewCard data={data} />;
                })}
            </Carousel>
        </div>
    );
};

export default UserReview2;
