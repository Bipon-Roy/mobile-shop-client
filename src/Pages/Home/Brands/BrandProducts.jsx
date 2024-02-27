import PropTypes from "prop-types";
import ProductCards from "../../../Components/ProductCards";
const BrandProducts = ({ phones }) => {
    return (
        <div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-4 md:mx-5 lg:mx-0">
                {phones.map((item) => (
                    <ProductCards key={item._id} phones={item}></ProductCards>
                ))}
            </div>
        </div>
    );
};
BrandProducts.propTypes = {
    phones: PropTypes.array.isRequired,
};
export default BrandProducts;
