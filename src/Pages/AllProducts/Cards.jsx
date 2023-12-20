import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Cards = ({ card }) => {
    const { _id, photo, title, shortDesc, name, price, OS, memory, processor } = card;

    return (
        <div className="flex flex-col bg-base-100 shadow-xl">
            <div className="px-5">
                <img className="h-[180px] w-full" src={photo} alt={title} />
            </div>

            <div className="px-5 text-center ">
                <p className="font-medium text-sm">{shortDesc}</p>

                <div className="my-3 text-sm">
                    <p className="font-medium ">
                        <span className="text-primary">{name}</span>
                    </p>
                    <p className="font-medium ">
                        Price: <span className="text-primary">{price}$</span>
                    </p>
                    <p className="font-medium">
                        Memory:<span className="text-primary">{memory}</span>
                    </p>
                    <p className="font-medium">
                        OS: <span className="text-primary">{OS}</span>
                    </p>
                    <p className="font-medium">
                        Processor: <span className="text-primary">{processor}</span>
                    </p>
                </div>
                <div className="mb-5 flex gap-3 justify-center ">
                    <Link
                        className="px-3 py-1 rounded-md text-sm font-medium text-white bg-primary"
                        to={`/phoneDetails/${_id}`}
                    >
                        See Details
                    </Link>
                    <Link
                        className="px-3 py-1 rounded-md text-sm font-medium border text-primary border-primary"
                        to={`/phoneDetails/${_id}`}
                    >
                        Add to Cart
                    </Link>
                </div>
            </div>
        </div>
    );
};
Cards.propTypes = {
    card: PropTypes.object.isRequired,
};
export default Cards;
