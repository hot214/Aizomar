import React from "react";
import { Link } from "react-router-dom";

export default function About() {
    return (
        <div className="w-full">
            <div className="w-full items-content justify-center flex bg-blue-700 py-7">
                <div className="w-8/12 flex">
                    <div className="w-1/2">
                        <span className="text-white text-xl">ABOUT US</span>
                    </div>
                    <div className="w-1/2 flex flex-col items-end justify-end">
                        <div className="text-white text-xs">
                            <a href="/home">Home</a><span> > </span><span className="text-white text-xs">About us</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full items-content justify-center flex">
                <div className="w-7/12 py-20 items-content justify-center flex">
                    <div className="w-1/2 mr-16">
                        <img src="./img/logo.jpg" />
                    </div>
                    <div className="w-1/2 text-center">
                        <p className="text-4xl mb-10 font-bold">ABOUT ALZOMAR</p>
                        <span>As a specialist in the fields of forensics, security and identity, Alzomar offers some of the most advanced, reliable and trusted solutions, serving some of the most prominent clients. The company is based in Doha, Qatar, from where it serves many government and private organisations with a comprehensive range of products and services since 2002. The success of the company is based on continuous introduction and delivery of the latest technologies and products in its specialist fields. Our partnership with our clients has evolved from supplier to advisor on many fronts, and our commitment to their satisfaction has brought mutual success. Alzomar´s extensive range of products and services in Forensics, Biometrics and Security provides high-value integrated solutions for Forensic Laboratories, Law Enforcement Agencies, Border Security, Government Departments, Airlines, Gas & Oil and Banking sector where highest levels of security is a constant demand. Many years of experience in the ICT field, has helped us to develop the ability to foresee, understand and deliver client needs in an ever increasing ICT driven world. From highly advanced and technical forensic solutions, to automated security products at borders and sensitive locations, from biometric identity solutions to imaginative access control and secure communications, Alzomar´s expertise has helped deliver exciting and notable projects.</span>
                    </div>
                </div>
            </div>
        </div>
    )
}