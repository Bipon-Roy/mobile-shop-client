import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

//styled-components button
const DetailsBtn = styled.button`
    padding: 4px 6px;
    font-size: 0.75rem;
    color: white;
    background-color: #f17e23;
    border-radius: 5px;

    @media screen and (min-width: 768px) {
        padding: 4px 12px;
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
        padding: 4px 12px;
    }
`;

//card component for only All Products page
const Cards = ({ card }) => {
    const { _id, photo, title, name, price, OS, memory, processor } = card;

    return (
        <div className="flex flex-col border">
            <div className="px-5 pt-5 pb-2 flex justify-center">
                <img className="h-[180px] w-full" src={photo} alt={title} />
            </div>

            <div className="px-5 text-center ">
                <p className="font-medium ">
                    <span className="text-primary text-base">{name}</span>
                </p>

                <div className="my-2 text-sm">
                    <p className="font-medium ">
                        Price: <span className="">{price}$</span>
                    </p>
                    <p className="font-medium">
                        Memory:<span className="">{memory}</span>
                    </p>
                    <p className="font-medium">
                        OS: <span className="">{OS}</span>
                    </p>
                    <p className="font-medium">
                        Processor: <span className="">{processor}</span>
                    </p>
                </div>
                <div className="pt-2 mb-5 flex gap-3 justify-center ">
                    <Link to={`/phoneDetails/${_id}`}>
                        <DetailsBtn>See Details</DetailsBtn>
                    </Link>

                    <AddToCartBtn>Add to Cart</AddToCartBtn>
                </div>
            </div>
        </div>
    );
};

Cards.propTypes = {
    card: PropTypes.object.isRequired,
};
export default Cards;
