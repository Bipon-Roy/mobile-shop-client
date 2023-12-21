import Advertisement from "../Advertisement/Advertisement";
import Banner from "../Banner/Banner";
import Brands from "../Brands/Brands";
import Categories from "../Categories/Categories";
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";
import NewsLetter from "../NewsLetter/NewsLetter";
import Services from "../Services/Services";

const Home = () => {
    return (
        <div className="max-w-[1380px] mx-auto">
            <Banner />
            <Services />
            <Categories />
            <FeaturedProducts />
            <Advertisement />
            <Brands />
            <NewsLetter />
        </div>
    );
};

export default Home;
