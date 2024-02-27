import { useEffect, useState } from "react";
import useAxiosUrl from "../../hooks/useAxiosUrl";
import Cards from "./Cards";
import Sidebar from "./Sidebar";
import { FaBars } from "react-icons/fa6";

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

    //fetching all phones data and sending query parameters for filtering
    useEffect(() => {
        axiosURl
            .get(
                `/phones?minPrice=${minPrice}&maxPrice=${maxPrice}&sortOrder=${sortOrder}&OS=${OS}&type=${type}&memory=${memory}&processor=${processor}&name=${name}`
            )
            .then((res) => {
                setPhones(res.data);
                setLoading(false);
            });
    }, [axiosURl, minPrice, maxPrice, sortOrder, processor, memory, type, OS, name]); //injecting dependency

    //showing a loading state until data fetching is completed
    if (loading) {
        return (
            <div className="flex justify-center items-center">
                <span className="loading loading-bars loading-lg"></span>
            </div>
        );
    }
    return (
        <div className="flex gap-5 max-w-[1420px] mx-auto mt-5">
            {/* sidebar for small and medium screen */}
            <div className="drawer absolute">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content absolute bottom-11 left-5 lg:hidden">
                    {/* Page content here */}
                    <label htmlFor="my-drawer" className="drawer-button">
                        <FaBars className="text-xl " />
                    </label>
                </div>
                <div className="drawer-side z-10">
                    <label
                        htmlFor="my-drawer"
                        aria-label="close sidebar"
                        className="drawer-overlay"
                    ></label>
                    <ul className="w-[60%]">
                        {/* Sidebar content here */}
                        <Sidebar
                            setSortOrder={setSortOrder} //sending callback functions as props
                            setOS={setOS}
                            setName={setName}
                            setType={setType}
                            setProcessor={setProcessor}
                            setMemory={setMemory}
                            setMinPrice={setMinPrice}
                            setMaxPrice={setMaxPrice}
                        />
                    </ul>
                </div>
            </div>
            {/*end of sidebar */}
            <div className="w-[20%] hidden lg:block">
                <Sidebar
                    setSortOrder={setSortOrder} //sending callback functions as props
                    setOS={setOS}
                    setName={setName}
                    setType={setType}
                    setProcessor={setProcessor}
                    setMemory={setMemory}
                    setMinPrice={setMinPrice}
                    setMaxPrice={setMaxPrice}
                />
            </div>

            {/*phone card container*/}
            <div className="flex-1">
                {phones.length > 0 ? (
                    <div className="mb-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mx-10 lg:mx-0">
                        {phones.map((card) => (
                            <Cards key={card._id} card={card}></Cards>
                        ))}
                    </div>
                ) : (
                    // showing error message when data is not available
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
