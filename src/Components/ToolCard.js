import React from "react";
import { Link, useNavigate } from "react-router-dom";

const ToolCard = ({ data }) => {
    console.log(data);
    const { name, description, min, quantity, price, photo, _id } = data;
    const navigate = useNavigate();
    return (
        <div className="max-w-md p-6 rounded-md shadow-md bg-gray-50 text-gray-900">
            <img
                src={photo}
                alt=""
                className="object-cover object-center w-full rounded-md h-40 bg-gray-500"
            />
            <div className="mt-6 mb-2">
                <span className="block text-xs font-medium tracking-widest uppercase text-pink-600">
                    Quisque
                </span>
                <h2 className="text-xl font-semibold tracking-wide">{name}</h2>
            </div>
            <p className="text-gray-800">{description}</p>
            <div className="mt-2 mb-5">
                <section className=" bg-gray-100 text-gray-800">
                    <div className="flex justify-between">
                        <div className="flex flex-col justify-start text-center ">
                            <p className="text-xl font-bold leading-none ">
                                {quantity}
                            </p>
                            <p className="text-sm sm:text-base">Available</p>
                        </div>

                        <div className="flex flex-col justify-start text-center">
                            <p className="text-xl font-bold leading-none ">
                                {min}
                            </p>
                            <p className="text-sm sm:text-base">Min. Order</p>
                        </div>
                        <div className="flex flex-col justify-start text-center">
                            <p className="text-xl font-bold leading-none ">
                                {price}
                            </p>
                            <p className="text-sm sm:text-base">Unit Price</p>
                        </div>
                    </div>
                </section>
            </div>

            <div className="text-center  mt-3">
                <button
                    // to="/purchase"
                    className="text-center border border-sky-500 rounded-full py-2 px-4 text-pink-600 font-semibold hover:bg-stone-200 "
                    onClick={() => {
                        navigate(`/purchase/${_id}`);
                    }}>
                    Order Now
                </button>
            </div>
            {/* <button class="btn btn-outline btn-success">Order Now</button> */}
        </div>
    );
};

export default ToolCard;
