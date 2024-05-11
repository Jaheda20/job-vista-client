import Banner from "./Banner";
import JobCategories from "./JobCategories/JobCategories";
import './style.css';


const HomePage = () => {
    return (
        <div>
            
            <Banner></Banner>
            <JobCategories></JobCategories>
        </div>
    );
};

export default HomePage;