import React from "react";

const MyPortfolio = () => {
    return (
        <div className="container w-full md:max-w-[60%] p-2 mx-auto">
            <h1 className="text-center text-3xl my-10">My Portfolio</h1>
            <div className="container w-full md:w-[80%] mx-auto">
                <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 bg-gray-100 text-gray-800">
                    <ul className="flex flex-col divide-y divide-gray-300">
                        <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
                            <div className="flex w-full space-x-2 sm:space-x-4">
                                <img
                                    className="flex-shrink-0 object-cover w-20 h-20 border-transparent rounded outline-none sm:w-32 sm:h-32 bg-gray-500"
                                    src="https://lh3.googleusercontent.com/a-/AOh14GhM95oUqEl8I93BxjH0JX2qekEdMad5ulpH4vK9BA=s96-c"
                                    alt="Polaroid camera"
                                />
                                <div className="flex flex-col justify-between w-full pb-4">
                                    <div className=" pb-2 ">
                                        <div className="space-y-1">
                                            <h3 className="text-lg font-semibold leading-snug sm:pr-8">
                                                Name
                                            </h3>
                                            <p className="text-lg text-gray-600">
                                                Akash Chanda Tushar
                                            </p>
                                        </div>
                                        <div className="mt-3">
                                            <h3 className="text-lg font-semibold leading-snug sm:pr-8">
                                                Email
                                            </h3>
                                            <p className="text-lg text-gray-600">
                                                akash.tushar98@gmail.com
                                            </p>
                                        </div>
                                        <div className="mt-3">
                                            <h3 className="text-lg font-semibold leading-snug sm:pr-8">
                                                Education
                                            </h3>
                                            <p className="text-lg text-gray-600">
                                                Bsc. in Computer Science &
                                                Engineering Leading University,
                                                Sylhet.
                                            </p>
                                        </div>
                                        <div className="mt-3">
                                            <h3 className="text-lg font-semibold leading-snug sm:pr-8">
                                                Technologies
                                            </h3>
                                            <p className="text-lg text-gray-600">
                                                Html, CSS, Tailwind css,
                                                Bootstrap, MERN , Firebase etc.
                                            </p>
                                        </div>
                                        <div className="mt-3">
                                            <h3 className="text-lg font-semibold leading-snug sm:pr-8">
                                                Recent Projects Link
                                            </h3>
                                            <a href="https://prc-law-firm.web.app/">
                                                <span className="text-blue-700">
                                                    Prc Law Firm
                                                </span>
                                            </a>
                                            <br />
                                            <a href="https://ghudamghor.firebaseapp.com/">
                                                <span className="text-blue-700">
                                                    Ghudam Ghor
                                                </span>
                                            </a>
                                            <br />
                                            <a href="https://akash9888.github.io/Travel-Site/">
                                                <span className="text-blue-700">
                                                    Jadoo
                                                </span>
                                            </a>
                                            <br />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;
