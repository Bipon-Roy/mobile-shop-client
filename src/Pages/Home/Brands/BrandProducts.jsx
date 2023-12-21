import "swiper/css/pagination";
import ProductCards from "../../../Components/ProductCards";
import "./Tab.css";
const BrandProducts = ({ phones }) => {
    return (
        <div>
            <div className="grid md:grid-cols-4 gap-10">
                {phones.map((item) => (
                    <ProductCards key={item._id} phones={item}></ProductCards>
                ))}
            </div>
        </div>
    );
};

export default BrandProducts;
