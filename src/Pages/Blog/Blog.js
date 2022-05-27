import React from "react";

const Blog = () => {
    return (
        <div className="container w-full md:max-w-[1340px] mx-auto p-6">
            <h1 className="text-2xl font-bold text-center text-black my-5">
                Blog
            </h1>
            <div>
                <h1 className="text-xl font-semibold mt-1">
                    Q-1: How will you improve the performance of a React
                    Application?
                </h1>
                <p className="text-xl  mt-1">
                    There are many different ways to improve react
                    performance.Some ways are <br />
                    1.Keeping component state local where necessary
                    <br />
                    2.Prevent unnecessary render.
                    <br />
                    3.Code-splitting in React using dynamic import() etc.
                    <br />
                </p>
            </div>
            <div className="mt-4">
                <h1 className="text-xl font-semibold mt-1">
                    Q-3: What are the different ways to manage a state in a
                    React application?
                </h1>
                <p className="text-xl  mt-1">
                    There are lots of ways to manage state​s in React, some of
                    ways are using: <br />
                    1.useState hooks
                    <br />
                    2.Context Api hooks.
                    <br />
                    3.Redux
                    <br />
                </p>
            </div>
            <div className="mt-4">
                <h1 className="text-xl font-semibold mt-1">
                    Q-3:What is a unit test? Why should write unit tests?
                </h1>
                <p className="text-xl  mt-1">
                    A unit test is a way of testing a unit - the smallest piece
                    of code that can be logically isolated in a system. <br />
                    As a unit state gives a view wheater each portion of code is
                    properly working or not, thats why unit every devoloper
                    should run unit test.
                </p>
            </div>
            <div className="mt-4">
                <h1 className="text-xl font-semibold mt-1">
                    Q-5:Why you do not set the state directly in React. For
                    example, if you have const [products, setProducts] =
                    useState([]). Why you do not set products = [...] instead,
                    you use the setProducts
                </h1>
                <p className="text-xl  mt-1">
                    Basically a useSate conatin tow perameter. First one is
                    contain value and second part contain a functionality to
                    store data in fisrt part
                    <br /> That's the reaason
                </p>
            </div>
            <div className="mt-4">
                <h1 className="text-xl font-semibold mt-1">
                    Q-5:How does prototypical inheritance work?
                </h1>
                <p className="text-xl  mt-1">
                    Prototypal Inheritance is that an object can point to
                    another object and inherit all its properties. The main
                    purpose is to allow multiple instances of an object to share
                    common properties, hence, the Singleton Pattern.
                </p>
            </div>
        </div>
    );
};

export default Blog;
