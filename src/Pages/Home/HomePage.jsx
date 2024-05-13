import Banner from "./Banner";
import JobCategories from "./JobCategories/JobCategories";
import Offer from "./Offer";
import './style.css';


const HomePage = () => {
    return (
        <div>
            <Offer></Offer>
            <Banner></Banner>
            <JobCategories></JobCategories>
        </div>
    );
};

export default HomePage;