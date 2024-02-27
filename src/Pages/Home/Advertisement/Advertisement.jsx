//Importing Images
import img1 from "../../../assets/Images/Advertisement/Middle-Banner_01-(1)-8769.jpg";
import img2 from "../../../assets/Images/Advertisement/Middle-Banner_02-5081.jpg";
import { Suspense, lazy } from "react";
const ImageContainer = lazy(() => import("../../../Components/ImageContainer"));
const Advertisement = () => {
    return (
        <div className="grid mx-5 grid-cols-1 md:grid-cols-2 gap-5 my-10 lg:mx-0">
            <Suspense fallback={<span className="loading loading-ring loading-md"></span>}>
                <ImageContainer img={img1} alt="LatestDeals" />
            </Suspense>
            <Suspense fallback={<span className="loading loading-ring loading-md"></span>}>
                <ImageContainer img={img2} alt="LatestDeals" />
            </Suspense>
        </div>
    );
};

export default Advertisement;
