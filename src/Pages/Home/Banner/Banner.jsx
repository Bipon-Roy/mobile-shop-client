import Slider from "./Slider";
import banner1 from "../../../assets/Images/banner1.webp";
import banner2 from "../../../assets/Images/banner2.webp";
import { lazy, Suspense } from "react";
const BannerImageContainer = lazy(() => import("../../../Components/ImageContainer"));
const Banner = () => {
    return (
        <div className="mx-5 lg:mx-0 mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
                <Slider />
            </div>
            <div className="grid grid-cols-2 gap-5 lg:gap-6 lg:grid-cols-1">
                <div>
                    <Suspense fallback={<span className="loading loading-ring loading-md"></span>}>
                        <BannerImageContainer img={banner1} title="Banner Image" />
                    </Suspense>
                </div>
                <div>
                    <Suspense fallback={<span className="loading loading-ring loading-md"></span>}>
                        <BannerImageContainer img={banner2} title="Banner Image" />
                    </Suspense>
                </div>
            </div>
        </div>
    );
};

export default Banner;
