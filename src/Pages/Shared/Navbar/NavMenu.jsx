import { NavLink } from "react-router-dom";
import "./Nav.css";
import { FaBars } from "react-icons/fa6";
import Sidebar from "../../AllProducts/Sidebar";
const NavMenu = () => {
    const links = (
        <>
            <li className="mr-5 font-medium">
                <NavLink to="/">Home</NavLink>
            </li>
            <li className="mr-5 font-medium">
                <NavLink to="/products">All Products</NavLink>
            </li>
        </>
    );
    return (
        <nav className="shadow-lg p-5">
            <div className="max-w-[1380px] mx-auto relative">
                <div className="drawer">
                    <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content absolute lg:hidden">
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
                        <ul className="w-1/2 md:w-[40%]">
                            {/* Sidebar content here */}
                            <Sidebar />
                        </ul>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <ul className="flex">{links}</ul>
                </div>
            </div>
        </nav>
    );
};

export default NavMenu;
