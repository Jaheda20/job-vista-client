
import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import JobCategories from "./JobCategories/JobCategories";

import './style.css';
import Offer from "./Offer/Offer";
import SummerOffer from "./Offer/SummerOffer";
import CareerAdvice from "./Career/CareerAdvice";
import Review from "./Review";


const HomePage = () => {
    return (
        <div>
            <Helmet>
                <title>JobVista | Homepage</title>
            </Helmet>
            <Offer></Offer>
            <Banner></Banner>
            <JobCategories></JobCategories>
            <SummerOffer></SummerOffer>
            <CareerAdvice></CareerAdvice>
            <Review></Review>
            
            
        </div>
    );
};

export default HomePage;