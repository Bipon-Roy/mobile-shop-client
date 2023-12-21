import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import Services from "../Service/Services";

const Home = () => {
    return (
        <div className="max-w-[1380px] mx-auto">
            <Banner />
            <Services />
            <Categories />
        </div>
    );
};

export default Home;
