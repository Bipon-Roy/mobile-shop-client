import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

const DetailsBtn = styled.button`
    padding: 4px 6px;
    font-size: 0.75rem;
    color: white;
    background-color: #f17e23;
    border-radius: 5px;

    @media screen and (min-width: 768px) {
        padding: 4px 10px;
        font-size: 0.75rem;
    }
`;
const AddToCartBtn = styled.button`
    padding: 1px 3px;
    font-size: 0.75rem;
    color: #f17e23;
    border: 1px solid #f17e23;
    border-radius: 5px;
    font-weight: 500;

    @media screen and (min-width: 768px) {
        padding: 4px 10px;
    }
`;
const ProductCards = ({ phones }) => {
    const { _id, photo, title, name, price } = phones;
    return (
        <div className="flex flex-col transition-all hover:shadow-xl hover:rounded-xl relative">
            <p className="absolute right-0 top-0 bg-primary px-2 py-1 max-w-fit text-xs rounded text-white">
                15% OFF
            </p>
            <div className="pt-5 pb-2 flex justify-center">
                <img className="w-[140px] h-[140px]" src={photo} alt={title} />
            </div>

            <div className="flex-grow my-2 text-center text-sm md:text-base">
                <p className="font-medium">{name}</p>
                <p className="font-medium">{price}$</p>
            </div>
            <div className="md:px-4 mb-4 flex gap-2 md:gap-3 justify-center ">
                <Link to={`/phoneDetails/${_id}`}>
                    <DetailsBtn>See Details</DetailsBtn>
                </Link>

                <AddToCartBtn>Add to Cart</AddToCartBtn>
            </div>
        </div>
    );
};
ProductCards.propTypes = {
    phones: PropTypes.object.isRequired,
};
export default ProductCards;
