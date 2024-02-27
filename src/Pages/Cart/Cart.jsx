import useCart from "../../hooks/useCart";
import CartsCard from "./CartsCard";
//cart pages
const Cart = () => {
    const [cart, , loading] = useCart();
    const isTrue = cart.length === 0;
    return (
        <div className="mx-auto max-w-7xl">
            {loading ? (
                <div className="flex justify-center items-center h-[50vh]">
                    <span className="loading loading-ring loading-md"></span>
                </div>
            ) : isTrue ? (
                <div className="flex justify-center pt-10">
                    <h1 className="text-3xl font-semibold text-[#403d39]">
                        Currently No products in the Cart!!
                    </h1>
                </div>
            ) : (
                <div className="grid md:grid-cols-2 gap-5 py-10 mx-6 lg:mx-0 ">
                    {cart.map((cards) => (
                        <CartsCard key={cards._id} cards={cards}></CartsCard>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Cart;
