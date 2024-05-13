import { Zoom } from "react-awesome-reveal";
import { RiFireFill } from "react-icons/ri";


const Offer = () => {
    return (
        <div className="container mx-auto text-center mt-5 mb-0 bg-violet-200 h-16 flex items-center justify-center">
            <Zoom>
            <h1 className="text-sm flex items-center font-bold text-indigo-900"> <RiFireFill size={24} className="text-orange-700" />
                Summer Hiring Special: First-month savings of up to $100 for new Enterprise and Small business Customers, and 6 free shifts <RiFireFill size={24} className="text-orange-700" />
            </h1>
            </Zoom>


        </div>
    );
};

export default Offer;