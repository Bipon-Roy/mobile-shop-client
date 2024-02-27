import { Suspense, lazy, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
const ImageContainer = lazy(() => import("../../Components/ImageContainer")); // lazy loading for image

const CheckOut = () => {
    const phones = useLoaderData();
    const { name, price, shortDesc, photo } = phones;
    const [totalPrice, setTotalPrice] = useState(price);
    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (e) => {
        const quantity = parseInt(e.target.value);
        if (!isNaN(quantity) && quantity > 0) {
            setQuantity(quantity);
            setTotalPrice(quantity * price); // Update total price based on quantity
        }
    };
    const handleConfirmOrder = () => {
        Swal.fire({
            title: "Success!",
            text: "Order Placed Successfully !",
            icon: "success",
            confirmButtonText: "Done!", // showing alert on click
        });
    };
    return (
        <div className="max-w-7xl mx-auto">
            <div className="card lg:card-side p-4 lg:gap-5">
                <div className="px-6 ">
                    <Suspense fallback={<span className="loading loading-ring loading-md"></span>}>
                        <ImageContainer img={photo} alt={name} />
                    </Suspense>
                </div>
                <div className="flex flex-col justify-between items-center w-full pr-4 mt-3 lg-mt-0">
                    <div className="space-y-3 font-semibold">
                        <p className="text-lg ">
                            Name: <span className="text-amber-500">{name}</span>
                        </p>
                        <p>{shortDesc}</p>
                        <p className="rounded-md font-bold">Price: {price}$</p>
                        <div className="flex items-center">
                            <label htmlFor="quantity" className="mr-2 font-medium ">
                                Quantity:
                            </label>
                            <input
                                type="number"
                                id="quantity"
                                name="quantity"
                                min="1"
                                value={quantity}
                                onChange={handleQuantityChange}
                                className="border rounded px-2 py-1 w-16 text-center focus:outline-primary"
                            />
                        </div>
                        <p className="text-red-500  rounded-md font-bold">Total: {totalPrice}$</p>
                        <button
                            onClick={handleConfirmOrder}
                            className="bg-amber-600 px-4 py-1 rounded text-white font-medium"
                        >
                            Confirm Order
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;
