import PropTypes from "prop-types";
import { AiFillDelete } from "react-icons/ai";
import Swal from "sweetalert2";
import useAxiosUrl from "../../hooks/useAxiosUrl";
import useCart from "../../hooks/useCart";
import { Suspense, lazy } from "react";
import { Link } from "react-router-dom";

const ImageContainer = lazy(() => import("../../Components/ImageContainer"));

const CartsCard = ({ cards }) => {
    const axiosUrl = useAxiosUrl();
    const [, refetch] = useCart(); //importing refetch from useCartHook
    const { _id, photo, name, brandName, type, price, shortDesc } = cards;

    //deleting cart data
    const handleDeleteProduct = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                axiosUrl.delete(`/cart/${id}`).then((data) => {
                    if (data.status === 200) {
                        Swal.fire("Deleted!", "Cart Item has been deleted.", "success");
                    }
                    refetch();
                });
            }
        });
    };

    return (
        <div className="card lg:card-side bg-white shadow-xl p-4 lg:gap-5">
            <figure className="px-6 w-full">
                <Suspense fallback={<span className="loading loading-ring loading-md"></span>}>
                    <ImageContainer img={photo} alt={name} />
                </Suspense>
            </figure>
            <div className="flex flex-col lg:flex-row justify-between items-center w-full pr-4 mt-3 lg-mt-0">
                <div className="space-y-3 font-semibold">
                    <p className="text-lg ">
                        Name: <span className="text-amber-500">{name}</span>
                    </p>
                    <p>{shortDesc}</p>
                    <p className="">Brand: {brandName}</p>
                    <p className="">Type: {type}</p>
                    <p className="text-amber-500  rounded-md font-bold">Price: {price}$</p>
                    <div className="flex justify-between pt-3">
                        <Link
                            className="bg-primary px-4 py-1 rounded text-white font-medium"
                            to={`/checkout/${_id}`}
                        >
                            Check Out
                        </Link>
                        <button
                            onClick={() => handleDeleteProduct(_id)}
                            className="bg-[#c1121f] px-4 py-1 rounded text-white font-medium"
                        >
                            <span className="flex items-center gap-1">
                                Delete <AiFillDelete className="text-xl" />
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
CartsCard.propTypes = {
    cards: PropTypes.object.isRequired,
};
export default CartsCard;
