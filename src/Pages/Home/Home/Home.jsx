import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";
import Services from "../Services/Services";

const Home = () => {
    return (
        <div className="max-w-[1380px] mx-auto">
            <Banner />
            <Services />
            <Categories />
            <FeaturedProducts />
        </div>
    );
};

export default Home;
