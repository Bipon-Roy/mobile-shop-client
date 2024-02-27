import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Suspense, lazy } from "react";
import useAxiosUrl from "../../hooks/useAxiosUrl";
import Swal from "sweetalert2";
import useCart from "../../hooks/useCart";

const ImageContainer = lazy(() => import("../../Components/CardImageContainer"));

//card component for only All Products page
const Cards = ({ card }) => {
    const axiosUrl = useAxiosUrl();
    const [, refetch] = useCart();
    // destructuring properties
    const {
        _id,
        photo,
        title,
        name,
        price,
        OS,
        memory,
        processor,
        brandName,
        type,
        shortDesc,
        keyFeature,
    } = card;
    const handleAddToCart = () => {
        const cartItem = {
            name,
            brandName,
            type,
            price,
            shortDesc,
            keyFeature,
            photo,
        };
        axiosUrl.post("/cart", cartItem).then((res) => {
            if (res.data.insertedId) {
                Swal.fire({
                    title: "Success!",
                    text: "Product Successfully Added To Cart!",
                    icon: "success",
                    confirmButtonText: "Done!",
                });
                refetch();
            }
        });
    };
    return (
        <div className="flex flex-col border">
            <div className="px-5 pt-5 pb-2 flex justify-center">
                <Suspense fallback={<span className="loading loading-ring loading-md"></span>}>
                    <ImageContainer img={photo} alt={title} />
                </Suspense>
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
                <div className="pt-2 mb-5 flex gap-3 justify-center">
                    <Link
                        className="px-3 py-1 rounded-md text-sm font-medium text-white bg-primary"
                        to={`/phoneDetails/${_id}`}
                    >
                        See Details
                    </Link>
                    <Link
                        className="px-3 py-1 rounded-md text-sm font-medium border text-primary border-primary"
                        onClick={handleAddToCart}
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
