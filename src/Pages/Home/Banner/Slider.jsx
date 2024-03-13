// importing images for slider

import slider1 from "../../../assets/Images/Slider1.webp";
import slider2 from "../../../assets/Images/Slider2.webp";
import slider3 from "../../../assets/Images/Slider3.webp";
import slider4 from "../../../assets/Images/Slider4.webp";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import { Suspense, lazy } from "react";
const ImageContainer = lazy(() => import("../../../Components/ImageContainer"));
const Slider = () => {
    return (
        <Swiper
            modules={[Pagination, Autoplay]}
            className="mySwiper"
            pagination={{
                clickable: true,
            }}
            autoplay={{
                delay: 3500,
                disableOnInteraction: false,
            }}
        >
            <SwiperSlide>
                <Suspense fallback={<span className="loading loading-ring loading-md"></span>}>
                    <ImageContainer img={slider1} title="LatestDeals" height="" />
                </Suspense>
            </SwiperSlide>
            <SwiperSlide>
                <Suspense fallback={<span className="loading loading-ring loading-md"></span>}>
                    <ImageContainer img={slider2} title="LatestDeals" height="" />
                </Suspense>
            </SwiperSlide>
            <SwiperSlide>
                <Suspense fallback={<span className="loading loading-ring loading-md"></span>}>
                    <ImageContainer img={slider3} title="LatestDeals" height="" />
                </Suspense>
            </SwiperSlide>
            <SwiperSlide>
                <Suspense fallback={<span className="loading loading-ring loading-md"></span>}>
                    <ImageContainer img={slider4} title="LatestDeals" height="" />
                </Suspense>
            </SwiperSlide>
        </Swiper>
    );
};

export default Slider;
