import { useEffect, useState } from "react";
import useAxiosUrl from "../../../hooks/useAxiosUrl";
import { useQuery } from "@tanstack/react-query";
import Cards from "./Cards";

const Home = () => {
    const axiosURl = useAxiosUrl();
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
        console.log("minPrice:", minPrice);
        console.log("maxPrice:", maxPrice);
        console.log("sortOrder:", sortOrder);

        axiosURl
            .get(
                `/phones?minPrice=${minPrice}&maxPrice=${maxPrice}&sortOrder=${sortOrder}&OS=${OS}&type=${type}&memory=${memory}&processor=${processor}&name=${name}`
            )
            .then((res) => {
                setPhones(res.data);
            });
    }, [axiosURl, minPrice, maxPrice, sortOrder, processor, memory, type, OS, name]);

    return (
        <div>
            <div className="flex flex-col lg:flex-row justify-between items-center border p-3 mb-6 mx-4 md:mx-8 lg:mx-0">
                <div>
                    <div className="flex flex-col lg:flex-row items-center gap-1 md:gap-4">
                        <div>
                            <p>By OS</p>
                            <select
                                className="md:px-5 py-2 border focus:outline-none ml-2"
                                onChange={(e) => setOS(e.target.value)}
                            >
                                <option value="">Chose One</option>
                                <option value="Android">Android</option>
                                <option value="iOS">iOS</option>
                            </select>
                        </div>
                        <div>
                            <p>By Memory</p>
                            <select
                                className="md:px-5 py-2 border focus:outline-none ml-2"
                                onChange={(e) => setMemory(e.target.value)}
                            >
                                <option value="">Chose One</option>
                                <option value="64gb">64gb</option>
                                <option value="128gb">128gb</option>
                                <option value="256gb">256gb</option>
                            </select>
                        </div>
                        <div>
                            <p>By Type</p>
                            <select
                                className="md:px-5 py-2 border focus:outline-none ml-2"
                                onChange={(e) => setType(e.target.value)}
                            >
                                <option value="">Chose One</option>
                                <option value="Phone">Phone</option>
                                <option value="Headphones">Headphones</option>
                                <option value="Laptop">Laptop</option>
                                <option value="Watch">Watch</option>
                            </select>
                        </div>

                        <div>
                            <p>By Processor</p>
                            <select
                                className="md:px-5 py-2 border focus:outline-none ml-2"
                                onChange={(e) => setProcessor(e.target.value)}
                            >
                                <option value="">Chose One</option>
                                <option value="Bionic Chip">Bionic Chip</option>
                                <option value="Mediatek">Mediatek</option>
                                <option value="Snapdragon">Snapdragon</option>
                                <option value="Exynos">Exynos</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row items-center gap-1 md:gap-4">
                    <input
                        className="border py-1 pl-3 w-[150px] focus:outline-none"
                        type="name"
                        placeholder="Product Name"
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        className="border py-1 pl-3 w-[150px] focus:outline-none"
                        type="number"
                        placeholder="Min Price"
                        onChange={(e) => setMinPrice(e.target.value)}
                    />
                    <input
                        className="border py-1 pl-3 w-[150px] focus:outline-none"
                        type="number"
                        placeholder="Max Price"
                        onChange={(e) => setMaxPrice(e.target.value)}
                    />
                    <select
                        className="md:px-5 py-2 border focus:outline-none"
                        onChange={(e) => setSortOrder(e.target.value)}
                    >
                        <option value="">Chose One</option>
                        <option value="desc">From High To Low</option>
                        <option value="asc">From Low To High</option>
                    </select>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 mx-6 md:mx-8 lg:mx-0">
                {phones.map((card) => (
                    <Cards key={card._id} card={card}></Cards>
                ))}
            </div>
        </div>
    );
};

export default Home;
