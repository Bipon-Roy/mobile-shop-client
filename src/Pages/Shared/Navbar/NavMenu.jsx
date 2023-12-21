import { NavLink } from "react-router-dom";
import "./Nav.css";

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
            <div className="max-w-[1380px] mx-auto">
                <div className="flex justify-center items-center">
                    <ul className="flex">{links}</ul>
                </div>
            </div>
        </nav>
    );
};

export default NavMenu;
