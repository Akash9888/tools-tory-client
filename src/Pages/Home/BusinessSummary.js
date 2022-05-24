import React from "react";

const BusinessSummary = () => {
    return (
        <section className="p-6 dark:bg-gray-800 dark:text-gray-100">
            <div className="container mx-auto grid justify-center grid-cols-2 text-center lg:grid-cols-3">
                <div className="flex flex-col justify-start m-2 lg:m-6">
                    <p className="text-4xl font-bold leading-none lg:text-6xl">
                        250+
                    </p>
                    <p className="text-sm sm:text-base">Clients</p>
                </div>
                <div className="flex flex-col justify-start m-2 lg:m-6">
                    <p className="text-4xl font-bold leading-none lg:text-6xl">
                        550M+
                    </p>
                    <p className="text-sm sm:text-base">Annual Revenue</p>
                </div>
                <div className="flex flex-col justify-start m-2 lg:m-6">
                    <p className="text-4xl font-bold leading-none lg:text-6xl">
                        53+
                    </p>
                    <p className="text-sm sm:text-base">Tools</p>
                </div>
                <div className="flex flex-col justify-start m-2 lg:m-6">
                    <p className="text-4xl font-bold leading-none lg:text-6xl">
                        33K+
                    </p>
                    <p className="text-sm sm:text-base">Reviews</p>
                </div>
                <div className="flex flex-col justify-start m-2 lg:m-6">
                    <p className="text-4xl font-bold leading-none lg:text-6xl">
                        89K
                    </p>
                    <p className="text-sm sm:text-base">
                        Followers on social media
                    </p>
                </div>

                <div className="flex flex-col justify-start m-2 lg:m-6">
                    <p className="text-4xl font-bold leading-none lg:text-6xl">
                        10+
                    </p>
                    <p className="text-sm sm:text-base">Workshops</p>
                </div>
            </div>
        </section>
    );
};

export default BusinessSummary;
