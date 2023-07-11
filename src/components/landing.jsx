import React from "react";
import { Link } from "react-router-dom";

export default function Landing() {
    return (
        <div className="w-full pb-20">
            <div className="w-full items-content justify-center flex mb-36">
                <div className="w-7/12 items-center justify-center">
                    <div className=" w-full items-center justify-center flex border-b border-gray-300 pl-3 pb-3 mt-32 mb-16">
                        <div className="w-1/2">
                            <div>
                                <span className="italic text-sky-800 font-bold">UPDATE</span>
                            </div>
                            <div>
                                <span className=" text-5xl font-bold">LATEST NEWS</span>
                            </div>
                        </div>
                        <div className="w-1/2 flex flex-col items-end justify-end">
                            <a href="#" className="hover:scale-110 duration-300 inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                All Views
                            </a>
                        </div>
                    </div>
                    <div className="w-full items-center justify-center">
                        <div className="w-full mx-auto flex flex-wrap grid-cols-1 lg:gap-x-3 lg:grid-cols-3">
                            <div className="w-4/12 pr-3">
                                <div className="pb-5">
                                    <a href="#">
                                        <div className="bg-sky-300 ...">
                                            <img className="object-fill h-48 w-96 " src="./img/news1.jpg" />
                                        </div>
                                    </a>
                                </div>
                                <div className="">News &amp; Events</div>
                                <div className="pl-10">
                                    <h3 className="">
                                        <a href="#"> Digital Twin 2023 </a>
                                    </h3>
                                </div>
                            </div>
                            <div className="w-4/12 pr-3">
                                <div className="pb-5">
                                    <a href="#">
                                        <div className=" items-end justify-end">
                                            <img className="object-fill h-48" src="./img/news2.jpg" />
                                            <div className="relative items-end">News &amp; Events</div>
                                        </div>
                                    </a>
                                </div>
                                
                                <div className="pl-10">
                                    <h3 className="">
                                        <a href="#"> Digital Twin 2023 </a>
                                    </h3>
                                </div>
                            </div>
                            <div className="w-4/12 pr-3">
                                <div className="pb-5">
                                    <a href="#">
                                        <div className="bg-sky-300 ...">
                                            <img className="object-fill h-48 w-96 " src="./img/news3.jpg" />
                                        </div>
                                    </a>
                                </div>
                                <div className="">News &amp; Events</div>
                                <div className="pl-10">
                                    <h3 className="">
                                        <a href="#"> Digital Twin 2023 </a>
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="w-full mt-10 flex flex-col items-center justify-center">
                            <a href="#" className="hover:scale-110 duration-300 inline-flex items-center px-7 py-2.5 text-sm font-medium text-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Load More
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full justify-center items-center flex">
                <div>
                    <a href="#" className=" text-2xl border-b border-gray-500">OUR PARTNERS</a>
                </div>
            </div>
            <div className="w-full justify-center items-center flex">
                <div>
                    <a href="#" className=" text-2xl border-b border-gray-500">OUR CLIENTS</a>
                </div>
            </div>
        </div>
    )
}