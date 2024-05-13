
import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import JobCategories from "./JobCategories/JobCategories";

import './style.css';
import Offer from "./Offer/Offer";
import SummerOffer from "./Offer/SummerOffer";


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
        </div>
    );
};

export default HomePage;