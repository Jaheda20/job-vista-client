import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaSquareReddit } from "react-icons/fa6";
import logo from "/images/logo.png"



const Footer = () => {
    return (
        <footer className="footer py-20 bg-fuchsia-200 flex flex-col items-center justify-center">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
                <div className="flex flex-col space-y-2">
                    <h6 className="footer-title">Category</h6>
                    <a className="link link-hover">Jobs in IT</a>
                    <a className="link link-hover">Jobs in Finance</a>
                    <a className="link link-hover">Jobs in Logistics</a>
                    <a className="link link-hover">Jobs in Marketing</a>
                </div>
                <div className="flex flex-col space-y-2">
                    <h6 className="footer-title">For job seekers</h6>
                    <a className="link link-hover">Browse Jobs</a>
                    <a className="link link-hover">Career Advice</a>
                    <a className="link link-hover">Resume Writings Services</a>
                    <a className="link link-hover">Student Career Center</a>
                    <a className="link link-hover">International Applicants</a>
                </div>
                <div className="flex flex-col space-y-2">
                    <h6 className="footer-title">About JobVista</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Work for us</a>
                    <a className="link link-hover">Contact us</a>
                    <a className="link link-hover">Press kit</a>
                    <a className="link link-hover">Frequently Asked Questions(FAQ)</a>

                </div>
                <div className="flex flex-col space-y-2">
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </div>
            <div className="flex items-center text-fuchsia-900 space-x-2 mt-8">
                <FaLinkedin size={24} />
                <FaYoutube size={24} />
                <FaInstagram size={24} />
                <FaFacebook size={24} />
                <FaSquareReddit size={24} />
            </div>
            <div>
                <p>Copyright © 2024 - JobVista | info@jobvista.se | 013-562 45 00</p>
            </div>
            <div className="flex flex-col items-center">
                <img src={logo} alt="" className="w-16" />
                <p className="text-4xl font-semibold  gap-0 text-purple-600">Job<span className="text-pink-500">Vista</span></p>
            </div>
        </footer>

    );
};

export default Footer;