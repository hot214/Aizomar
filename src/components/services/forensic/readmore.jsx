import React from "react";
import { Link } from "react-router-dom";
import MyCarousel from "./carousel";
import MyTabs from './tab'

export default function Readmore() {
    return (
        <div className="w-full xl:pt-28">
            <div className="w-full items-content justify-center flex bg-[#1845aa] py-7">
                <div className="xl:w-7/12 lg:w-8/12 md:w-9/12 sm:w-10/12 w-11/12 flex">
                    <div className="w-1/2">
                        <span className="text-white text-xl">MOBILE LAB (PALADIN)</span>
                    </div>
                    <div className="w-1/2 flex flex-col items-end justify-center">
                        <div className="text-white text-xs">
                            <a href="/">Home</a><span> > </span><a href="/computer-forensics/">Computer Forensics</a><span> > </span><a href="/computer-forensics/digital-forensics-laboratory">Digital Forensics Laboratory</a><span> > </span><span className="text-white text-xs">MOBILE LAP(PALADIN)</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full items-content justify-center flex mb-5">
                <div className="xl:w-7/12 lg:w-8/12 md:w-9/12 sm:w-10/12 w-11/12 py-10 items-content justify-center">
                    <div className="w-full lg:flex md:block">
                        <div className="lg:w-1/4 mr-5 pr-3 sm:w-full md:w-full">
                            <MyCarousel />
                        </div>
                        <div className="lg:w-3/4 sm:w-full sm:mt-10 mt-10 ">
                            <MyTabs />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}