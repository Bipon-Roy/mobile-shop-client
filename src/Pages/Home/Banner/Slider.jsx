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

const Slider = () => {
    return (
        <Swiper
            navigation={true}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
            autoplay={{
                delay: 3500,
                disableOnInteraction: false,
            }}
        >
            <SwiperSlide>
                <img src={slider1} alt="LatestDeals" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={slider2} alt="LatestDeals" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={slider3} alt="LatestDeals" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={slider4} alt="LatestDeals" />
            </SwiperSlide>
        </Swiper>
    );
};

export default Slider;
