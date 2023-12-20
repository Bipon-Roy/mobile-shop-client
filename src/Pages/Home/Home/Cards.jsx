import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Cards = ({ card }) => {
    const { _id, photo, title, shortDesc, price, OS, memory, processor } = card;

    return (
        <div className="flex flex-col bg-base-100 shadow-xl transition-all hover:scale-105">
            <Link to={`/phoneDetails/${_id}`}>
                <figure>
                    <img className="h-[200px] w-full" src={photo} alt={title} />
                </figure>
            </Link>

            <div className="p-5 text-center">
                <p className="font-medium text-sm">{shortDesc}</p>

                <div className="my-3 text-base">
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
            </div>
        </div>
    );
};
Cards.propTypes = {
    card: PropTypes.object.isRequired,
};
export default Cards;
