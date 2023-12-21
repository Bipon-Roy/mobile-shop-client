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
        <nav className="shadow-lg  p-4 ">
            <div className="max-w-[1420px] mx-auto">
                <ul className="flex justify-center">{links}</ul>
            </div>
        </nav>
    );
};

export default NavMenu;
