import "swiper/css";
import "swiper/css/bundle";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Banner = () => {
    return (
        <div id="banner" className="mt-20 md:mt-12 mb-10 ">
            <Swiper
                pagination={true}
                modules={[Pagination, Autoplay]}
                loop={true}
                autoplay={
                    { delay: 2500 }
                }
            >

                <SwiperSlide className="slide">
                    <div className='slide slide1 flex flex-col gap-4 item-center justify-center relative '>
                        <div className="absolute flex items-center justify-center w-full h-full bg-gradient-to-t from-[#151515] to-[rgba(21, 21, 21, 0) ">
                            <div className="text-white pl-20 space-y-4 w-1/2 flex flex-col items-center justify-center text-center">
                                <h1 className="text-6xl font-bold text-pink-100">Unlock Your Career Potential with <br /> <span className="text-6xl">JobVista</span> </h1>
                                <p>Discover your next career move with Job Vista, where opportunities meet ambition. Streamline your job search and elevate your career trajectory effortlessly.</p>

                            </div>
                        </div>

                    </div>
                </SwiperSlide>


                <SwiperSlide className="slide">
                    <div className='slide slide2 flex flex-col gap-4 item-center justify-center relative'>
                    <div className="absolute flex items-center justify-center w-full h-full bg-gradient-to-t from-[#151515] to-[rgba(21, 21, 21, 0) ">
                            <div className="text-white pl-20 space-y-4 w-1/2 flex flex-col items-center justify-center text-center">
                                <h1 className="text-6xl font-bold text-white">Join Our Team:  <br /> <span className="text-6xl">Together Towards Triumph</span> </h1>
                                <p>Join our dynamic team and embark on a journey of innovation and collaboration. Together, let's create meaningful impact and achieve extraordinary success.</p>

                            </div>
                        </div>

                    </div>
                </SwiperSlide>

                <SwiperSlide className="slide">
                    <div className='slide slide3 flex flex-col gap-4 item-center justify-center relative'>
                    <div className="absolute flex items-center justify-center w-full h-full bg-gradient-to-t from-[#151515] to-[rgba(21, 21, 21, 0) ">
                            <div className="text-white pl-20 space-y-4 w-1/2 flex flex-col items-center justify-center text-center">
                                <h1 className="text-6xl font-bold text-pink-100">Unlock Your Career Potential with <br /> <span className="text-6xl">JobVista</span> </h1>
                                <p>Discover your next career move with Job Vista, where opportunities meet ambition. Streamline your job search and elevate your career trajectory effortlessly.</p>

                            </div>
                        </div>
                        
                    </div>
                </SwiperSlide>

                <SwiperSlide className="slide">
                    <div className='slide slide4 flex flex-col gap-4 item-center justify-center relative'>
                    <div className="absolute flex items-center justify-center w-full h-full bg-gradient-to-t from-[#151515] to-[rgba(21, 21, 21, 0) ">
                            <div className="text-white pl-20 space-y-4 w-1/2 flex flex-col items-center justify-center text-center">
                                <h1 className="text-6xl font-bold text-pink-100">Unlock Your Career Potential with <br /> <span className="text-6xl">JobVista</span> </h1>
                                <p>Discover your next career move with Job Vista, where opportunities meet ambition. Streamline your job search and elevate your career trajectory effortlessly.</p>

                            </div>
                        </div>
                        
                    </div>
                </SwiperSlide>
            </Swiper>











        </div>
    );
};

export default Banner;