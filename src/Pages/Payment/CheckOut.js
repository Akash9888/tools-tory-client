import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "./CheckoutForm";
import { useParams } from "react-router-dom";

const stripePromise = loadStripe(`${process.env.REACT_APP_publish_key}`);

const CheckOut = ({ setTransactionId, id, totalPrice }) => {
    const [clientSecret, setClientSecret] = useState("");
    const params = useParams();

    useEffect(() => {
        fetch(
            "https://aqueous-anchorage-06068.herokuapp.com/api/payment/create-payment-intent",
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ price: totalPrice }),
            },
            {
                headers: {
                    authorization: `Bearer ${localStorage.getItem(
                        "accessToken"
                    )}`,
                },
            }
        )
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, []);

    const appearance = {
        theme: "stripe",
    };
    const options = {
        clientSecret,
        appearance,
    };
    return (
        <div>
            {clientSecret && (
                <Elements options={options} stripe={stripePromise}>
                    <CheckoutForm setTransactionId={setTransactionId} id={id} />
                </Elements>
            )}
        </div>
    );
};

export default CheckOut;
