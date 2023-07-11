import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer>
            <div className="bg-blue-700 w-full justify-center items-center flex">
                <div className="w-8/12 flex justify-center pt-20 pb-32">
                    <div className="w-4/12">
                        <span className="font-cr text-white font-serif text-lg">QUICK LINKS</span>
                        <div className=" text-blue-400 mt-6">
                            <ul>
                                <li><a className="hover:text-white" href="https://sat.ae/about/">About Us</a></li>
                                <li><a className="hover:text-white" href="https://sat.ae/about/awards/">Awards</a></li>
                                <li><a className="hover:text-white" href="https://sat.ae/mission-vision/">Mission &amp; Vision</a></li>
                                <li><a className="hover:text-white" href="https://sat.ae/clients/">Clients</a></li>
                                <li><a className="hover:text-white" href="https://sat.ae/partners">Partners</a></li>
                                <li><a className="hover:text-white" href="https://sat.ae/contact-us/">Contact</a></li>
                            </ul>
                            <p>&nbsp;</p>
                        </div>
                    </div>
                    <div className="w-4/12">
                        <span className="font-cr text-white font-serif text-lg">NEWS & EVENTS</span>
                        <div className=" text-blue-400 mt-6">
                            <ul>
                                <li className="mb-4">
                                    <a className="hover:text-white" href="https://sat.ae/about/">Digital Twin 2023</a><br />
                                    <span>March 14, 2023</span>
                                </li>
                                <li className="mb-4">
                                    <a className="hover:text-white" href="https://sat.ae/about/">Ajman Police Exhibition 2023 </a><br />
                                    <span>March 13, 2023</span>
                                </li>
                                <li className="mb-4">
                                    <a className="hover:text-white" href="https://sat.ae/about/">World Police Summit 2023</a><br />
                                    <span>March 7, 2023</span>
                                </li>
                                <li>
                                    <a className="hover:text-white" href="https://sat.ae/about/">view all</a>
                                </li>
                            </ul>
                            <p>&nbsp;</p>
                        </div>
                    </div>
                    <div className="w-4/12">
                        <span className="font-cr text-white font-serif text-lg">CONTACT INFO</span>
                        <div className=" text-blue-400 mt-6">
                            <ul>
                                <li>Head Office</li>
                                <li>Scientific Analytical Tools</li>
                                <li>(S.A.T. Trading L.L.C)</li>
                                <li>P.O.Box:182174, Dubai-U.A.E</li>
                                <li>Office No: 2307/2308/2309</li>
                                <li>Prime Tower, Burj Khalifa Street</li>
                                <li>Business Bay, Dubai</li>
                                <li>Tel: +971 4 2443833</li>
                                <li>Fax: +971 4 244 3832</li>
                                <li>Email: info@sat.ae</li>
                            </ul>
                            <p>&nbsp;</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-neutral-200 p-3 text-center dark:bg-neutral-600">
                <span className='text-xs'>© Copyright 2017 SAT. All rights reserved.</span>
            </div>
        </footer>
    )
}