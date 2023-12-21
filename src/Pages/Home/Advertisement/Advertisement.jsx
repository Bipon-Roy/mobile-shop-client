//Importing Images

import img1 from "../../../assets/Images/Advertisement/Middle-Banner_01-(1)-8769.jpg";
import img2 from "../../../assets/Images/Advertisement/Middle-Banner_02-5081.jpg";

const Advertisement = () => {
    return (
        <div className="grid mx-5 grid-cols-1 md:grid-cols-2 gap-5 my-10 lg:mx-0">
            <img src={img1} alt="Latest Deals" />
            <img src={img2} alt="Latest Deals" />
        </div>
    );
};

export default Advertisement;
