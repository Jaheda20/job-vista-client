
import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import JobCategories from "./JobCategories/JobCategories";
import Offer from "./Offer";
import './style.css';


const HomePage = () => {
    return (
        <div>
            <Helmet>
                <title>JobVista | Homepage</title>
            </Helmet>
            <Offer></Offer>
            <Banner></Banner>
            <JobCategories></JobCategories>
        </div>
    );
};

export default HomePage;