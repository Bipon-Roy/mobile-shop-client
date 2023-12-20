import Slider from "./Slider";
import banner1 from "../../../assets/Images/banner1.webp";
import banner2 from "../../../assets/Images/banner2.webp";

const Banner = () => {
    return (
        <div className="mt-8 grid grid-cols-3 gap-5">
            <div className="col-span-2">
                <Slider />
            </div>
            <div className="space-y-6 h-[500px]">
                <img className="h-[227px] w-full" src={banner1} alt="LatestDeals" />
                <img className="h-[227px] w-full" src={banner2} alt="LatestDeals" />
            </div>
        </div>
    );
};

export default Banner;
