import Slider from "./Slider";
import banner1 from "../../../assets/Images/banner1.webp";
import banner2 from "../../../assets/Images/banner2.webp";

const Banner = () => {
    return (
        <div className="mx-5 lg:mx-0 mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
                <Slider />
            </div>
            <div className="grid grid-cols-2 gap-5 lg:gap-6 lg:grid-cols-1">
                <div>
                    <img className="md:h-[227px] md:w-full" src={banner1} alt="LatestDeals" />
                </div>
                <div>
                    <img className="md:h-[227px] md:w-full" src={banner2} alt="LatestDeals" />
                </div>
            </div>
        </div>
    );
};

export default Banner;
