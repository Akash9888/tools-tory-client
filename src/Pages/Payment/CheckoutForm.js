import React, { useEffect, useState } from "react";
import {
    PaymentElement,
    useStripe,
    useElements,
} from "@stripe/react-stripe-js";
import Loader from "../../Components/Loader";

import { useNavigate, useParams } from "react-router-dom";
export default function CheckoutForm({ setTransactionId, id }) {
    const stripe = useStripe();
    const elements = useElements();

    const [message, setMessage] = useState(null);

    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        if (!stripe) {
            return;
        }

        const clientSecret = new URLSearchParams(window.location.search).get(
            "payment_intent_client_secret"
        );

        if (!clientSecret) {
            return;
        }

        stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
            console.log(paymentIntent);
            switch (paymentIntent.status) {
                case "succeeded":
                    // setMessage("Payment succeeded   ");

                    setTransactionId(paymentIntent.id);
                    break;
                case "processing":
                    setMessage("Your payment is processing.");
                    break;
                case "requires_payment_method":
                    setMessage(
                        "Your payment was not successful, please try again."
                    );
                    break;
                default:
                    setMessage("Something went wrong.");
                    break;
            }
        });
    }, [stripe]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        setIsLoading(true);

        const { error, paymentIntent } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url: `http://localhost:3000/payment/${id}`,
            },
        });

        if (error.type === "card_error" || error.type === "validation_error") {
            setMessage(error.message);
        } else {
            setMessage("An unexpected error occured.");
        }

        setIsLoading(false);
    };

    return (
        <div className="card  bg-base-100 shadow-xl p-1">
            <form id="payment-form" onSubmit={handleSubmit}>
                <PaymentElement id="payment-element" />
                <button
                    disabled={isLoading || !stripe || !elements}
                    id="submit">
                    <span id="button-text">
                        {isLoading ? (
                            <Loader />
                        ) : (
                            <button class="btn btn-outline btn-success mt-3">
                                Pay now
                            </button>
                        )}
                    </span>
                </button>
                {/* Show any error or success messages */}
                {message && (
                    <div id="payment-message" className="text-red-700">
                        {message}
                    </div>
                )}
            </form>
        </div>
    );
}
