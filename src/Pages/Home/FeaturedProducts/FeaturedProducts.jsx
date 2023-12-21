import { useEffect, useState } from "react";
import useAxiosUrl from "../../../hooks/useAxiosUrl";
import ProductCards from "../../../Components/ProductCards";

const FeaturedProducts = () => {
    const axiosUrl = useAxiosUrl();
    const [loading, setLoading] = useState(true);
    const [phones, setPhones] = useState([]);
    useEffect(() => {
        axiosUrl.get("/phones").then((res) => {
            setPhones(res.data);
            setLoading(false);
        });
    }, [axiosUrl]);
    console.log(phones);
    if (loading) {
        return (
            <div className="flex justify-center items-center">
                <span className="loading loading-bars loading-lg"></span>
            </div>
        );
    }
    return (
        <div className="my-10">
            <div className="space-y-2 text-center">
                <h1 className="font-semibold text-2xl uppercase">Featured Products</h1>
                <p>Get your desired product from featured products</p>
            </div>
            <div className="my-6 grid grid-cols-1 md:grid-cols-3 gap-3 lg:grid-cols-6 mx-5 lg:mx-0">
                {phones.slice(3, 9).map((card) => (
                    <ProductCards key={card._id} phones={card}></ProductCards>
                ))}
            </div>
        </div>
    );
};

export default FeaturedProducts;
