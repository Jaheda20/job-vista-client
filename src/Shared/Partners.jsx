
import { FaApple } from "react-icons/fa";
import { FaFedex } from "react-icons/fa";
import { SiLogitech } from "react-icons/si";
import { SiArstechnica } from "react-icons/si";
import { SiMercedes } from "react-icons/si";
import { SiEricsson } from "react-icons/si";

import { BsAmazon } from "react-icons/bs";
import { SiSchneiderelectric } from "react-icons/si";



const Partners = () => {
    return (
        <section className="p-6 bg-violet-100 dark:text-gray-800 mb-12">
            <div className="container p-4 mx-auto text-center">
                <h2 className="text-4xl font-bold">Trusted by the industry leaders</h2>
            </div>
            <div className="container flex flex-wrap justify-center mx-auto dark:text-gray-600">
                
                    
                    <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
                        <BsAmazon size={70} />
                    </div>
                    <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
                        <SiSchneiderelectric size={70} />
                    </div>


                <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
                    <FaFedex size={70} />
                </div>
                <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
                    <SiLogitech size={70} />
                </div>
                <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
                    <FaApple size={70} />
                </div>
                <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
                    <SiArstechnica size={70} />
                </div>
                <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
                    <SiMercedes size={70} />
                </div>
                <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
                    <SiEricsson size={70} />
                </div>

            </div>
        </section>
    );
};

export default Partners;