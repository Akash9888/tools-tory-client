import React from "react";
import Swal from "sweetalert2";

const Contact = () => {
    const contactFormSubmit = (e) => {
        e.preventDefault();
        Swal.fire({
            icon: "success",
            title: "Form submitted. We are reaching you as asap",
            showConfirmButton: true,
        });
    };
    return (
        <section className="py-6 mt-10 bg-gray-300 text-gray-900">
            <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
                <div className="py-6 md:py-0 md:px-6">
                    <h1 className="text-4xl font-bold">Get in touch</h1>
                    <p className="pt-2 pb-4">
                        Fill in the form to start a conversation
                    </p>
                    <div className="space-y-4">
                        <p className="flex items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="w-5 h-5 mr-2 sm:mr-6">
                                <path
                                    fillRule="evenodd"
                                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                    clipRule="evenodd"></path>
                            </svg>
                            <span>Shibgonj, Sylhet</span>
                        </p>
                        <p className="flex items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="w-5 h-5 mr-2 sm:mr-6">
                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                            </svg>
                            <span>01776774988</span>
                        </p>
                        <p className="flex items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="w-5 h-5 mr-2 sm:mr-6">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                            </svg>
                            <span>tools_toy@business.com</span>
                        </p>
                    </div>
                </div>
                <form
                    className="flex flex-col py-6 space-y-6 md:py-0 md:px-6 ng-untouched ng-pristine ng-valid"
                    onSubmit={contactFormSubmit}>
                    <label className="block">
                        <span className="mb-1">Full name</span>
                        <input
                            type="text"
                            required={true}
                            placeholder="Leroy Jenkins"
                            className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-pink-400"
                        />
                    </label>
                    <label className="block">
                        <span className="mb-1">Email address</span>
                        <input
                            type="email"
                            required={true}
                            placeholder="leroy@jenkins.com"
                            className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-pink-400"
                        />
                    </label>
                    <label className="block">
                        <span className="mb-1">Message</span>
                        <textarea
                            rows="3"
                            required={true}
                            className="block w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-pink-600 bg-gray-100"></textarea>
                    </label>
                    <button
                        type="submit"
                        className="text-center border border-sky-500 rounded-full py-2 px-4 text-pink-600 font-semibold hover:bg-stone-200 ">
                        Submit
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
