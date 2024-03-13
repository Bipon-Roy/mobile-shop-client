import PropTypes from "prop-types";
import { Suspense, lazy } from "react";
import { Link } from "react-router-dom";
import useAxiosUrl from "../hooks/useAxiosUrl";
import Swal from "sweetalert2";
import useCart from "../hooks/useCart";
const ImageContainer = lazy(() => import("./ImageContainer")); // lazy loading for image

// Card Component for home page
const ProductCards = ({ phones }) => {
    const [, refetch] = useCart();
    const axiosUrl = useAxiosUrl();
    const { _id, photo, title, name, price, brandName, type, shortDesc, keyFeature } = phones;
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
                refetch();
                Swal.fire({
                    title: "Success!",
                    text: "Product Successfully Added To Cart!",
                    icon: "success",
                    confirmButtonText: "Done!",
                });
            }
        });
    };
    return (
        <div className="flex flex-col transition-all hover:shadow-xl hover:rounded-xl relative">
            <p className="absolute right-0 top-0 bg-primary px-2 py-1 max-w-fit text-xs rounded text-white">
                15% OFF
            </p>
            <div className="pt-5 pb-2 flex justify-center">
                <Suspense fallback={<span className="loading loading-ring loading-md "></span>}>
                    <ImageContainer img={photo} alt={title} height="44" />
                </Suspense>
            </div>

            <div className="flex-grow my-2 text-center text-sm md:text-base ">
                <p className="font-medium">{name}</p>
                <p className="font-medium">{price}$</p>
            </div>
            <div className="pt-2 p-1 md:p-2 mb-5 flex gap-3 justify-center ">
                <Link
                    className="px-[3px] md:px-2 py-1 rounded-md text-xs md:text-sm font-medium text-white bg-primary"
                    to={`/phoneDetails/${_id}`}
                >
                    See Details
                </Link>
                <Link
                    onClick={handleAddToCart}
                    className="px-[1px] md:px-2 py-1 rounded-md text-xs md:text-sm font-medium border text-primary border-primary"
                >
                    Add to Cart
                </Link>
            </div>
        </div>
    );
};
ProductCards.propTypes = {
    phones: PropTypes.object.isRequired,
};
export default ProductCards;
