import PropTypes from "prop-types";
const Sidebar = ({
    setOS,
    setMemory,
    setType,
    setProcessor,
    setName,
    setMinPrice,
    setMaxPrice,
    setSortOrder,
}) => {
    return (
        <div className="flex flex-col min-h-screen  bg-[#F6F8FA] p-5">
            <div className="flex flex-col justify-center space-y-3">
                <h1 className="text-lg font-medium text-primary text-center">Search Products</h1>
                <div className="divider text-sm my-2">By Product Name</div>
                <input
                    className="border py-2 pl-3  focus:outline-none"
                    type="name"
                    placeholder="Product Name"
                    onChange={(e) => setName(e.target.value)}
                />
                <div className="divider text-sm my-2">By Product Price</div>
                <input
                    className="border py-2 pl-3  focus:outline-none"
                    type="number"
                    placeholder="Min Price"
                    onChange={(e) => setMinPrice(e.target.value)}
                />
                <input
                    className="border py-2 pl-3  focus:outline-none"
                    type="number"
                    placeholder="Max Price"
                    onChange={(e) => setMaxPrice(e.target.value)}
                />
            </div>
            <div>
                <div className="my-4">
                    <div>
                        <div className="divider text-sm my-3">By OS</div>
                        <select
                            className="md:px-5 py-2 border focus:outline-none  w-full"
                            onChange={(e) => setOS(e.target.value)}
                        >
                            <option value="">Chose One</option>
                            <option value="Android">Android</option>
                            <option value="iOS">iOS</option>
                        </select>
                    </div>
                    <div>
                        <div className="divider text-sm my-3">By Memory</div>
                        <select
                            className="md:px-5 py-2 border focus:outline-none  w-full"
                            onChange={(e) => setMemory(e.target.value)}
                        >
                            <option value="">Chose One</option>
                            <option value="64gb">64gb</option>
                            <option value="128gb">128gb</option>
                            <option value="256gb">256gb</option>
                        </select>
                    </div>
                    <div>
                        <div className="divider text-sm my-3">By Type</div>
                        <select
                            className="md:px-5 py-2 border focus:outline-none  w-full"
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
                        <div className="divider text-sm my-3">By Processor</div>
                        <select
                            className="md:px-5 py-2 border focus:outline-none  w-full"
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
            <div className="mt-4">
                <h1 className="text-lg font-medium text-primary text-center my-2">Sort Products</h1>
                <select
                    className="md:px-5 py-2 border focus:outline-none w-full"
                    onChange={(e) => setSortOrder(e.target.value)}
                >
                    <option value="">Chose One</option>
                    <option value="desc">From High To Low</option>
                    <option value="asc">From Low To High</option>
                </select>
            </div>
        </div>
    );
};
Sidebar.propTypes = {
    setOS: PropTypes.func.isRequired,
    setMemory: PropTypes.func.isRequired,
    setType: PropTypes.func.isRequired,
    setProcessor: PropTypes.func.isRequired,
    setName: PropTypes.func.isRequired,
    setMinPrice: PropTypes.func.isRequired,
    setMaxPrice: PropTypes.func.isRequired,
    setSortOrder: PropTypes.func.isRequired,
};
export default Sidebar;
