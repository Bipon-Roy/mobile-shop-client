import { useEffect, useState } from "react";
import useAxiosUrl from "../../hooks/useAxiosUrl";
import Cards from "./Cards";
import Sidebar from "./Sidebar";

const AllProducts = () => {
    const axiosURl = useAxiosUrl();
    const [loading, setLoading] = useState(true);
    const [phones, setPhones] = useState([]);
    const [sortOrder, setSortOrder] = useState("");
    const [OS, setOS] = useState("");
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [processor, setProcessor] = useState("");
    const [memory, setMemory] = useState("");
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");

    useEffect(() => {
        axiosURl
            .get(
                `/phones?minPrice=${minPrice}&maxPrice=${maxPrice}&sortOrder=${sortOrder}&OS=${OS}&type=${type}&memory=${memory}&processor=${processor}&name=${name}`
            )
            .then((res) => {
                setPhones(res.data);
                setLoading(false);
            });
    }, [axiosURl, minPrice, maxPrice, sortOrder, processor, memory, type, OS, name]);

    if (loading) {
        return (
            <div className="flex justify-center items-center">
                <span className="loading loading-bars loading-lg"></span>
            </div>
        );
    }
    return (
        <div className="flex gap-5 max-w-[1420px] mx-auto mt-5">
            <div className="w-[20%]">
                <Sidebar
                    setSortOrder={setSortOrder}
                    setOS={setOS}
                    setName={setName}
                    setType={setType}
                    setProcessor={setProcessor}
                    setMemory={setMemory}
                    setMinPrice={setMinPrice}
                    setMaxPrice={setMaxPrice}
                />
            </div>
            <div className="flex-1">
                {phones.length > 0 ? (
                    <div className="my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mx-6 md:mx-8 lg:mx-0">
                        {phones.map((card) => (
                            <Cards key={card._id} card={card}></Cards>
                        ))}
                    </div>
                ) : (
                    <div className="h-[60vh] flex items-center justify-center">
                        <h1 className="text-3xl font-semibold text-red-500">
                            Currently No Products Available!!!
                        </h1>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AllProducts;
