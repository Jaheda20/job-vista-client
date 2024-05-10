import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaSquareReddit } from "react-icons/fa6";
import logo from "/images/logo.png"



const Footer = () => {
    return (
        <footer className="footer px-5 py-20 bg-pink-100 flex flex-col items-center justify-center">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 text-violet-950">
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
                <div className="flex flex-col">
                    <h6 className="footer-title">Find us at-</h6>
                    <p>Kungsgatan 5, Linköping 587 45
                        <br />
                        Östergötland, Sweden
                    </p>
                    <div className="mt-6">
                        <p className="font-bold">Opening hours-</p>
                        <p>Monday-Thursday : 10:00 - 16:00</p>
                        <p>Fiday: 11:00 - 15:00</p>
                        <p>Saturday - Sunday : Closed</p>
                    </div>


                </div>

            </div>
            <div className="flex items-center space-x-2 mt-8 text-fuchsia-900">
                <FaLinkedin size={24} />
                <FaYoutube size={24} />
                <FaInstagram size={24} />
                <FaFacebook size={24} />
                <FaSquareReddit size={24} />
            </div>
            <div>
                <p className="text-violet-900">Copyright © 2024 - JobVista |  info@jobvista.se | 013-562 45 00</p>
            </div>

            <div className="flex items-end gap-0 mb-0">
                <img src={logo} alt="" className="w-16" />
                <p className="text-5xl font-semibold  gap-0 text-fuchsia-400">ob<span className="text-fuchsia-700">Vista</span></p>
            </div>



        </footer>

    );
};

export default Footer;