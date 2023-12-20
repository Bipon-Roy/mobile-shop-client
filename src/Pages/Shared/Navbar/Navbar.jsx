import { Link } from "react-router-dom";
import logo from "../../../assets/Images/logo.webp";
import { GrCart } from "react-icons/gr";
import NavMenu from "./NavMenu";
const Navbar = () => {
    return (
        <div>
            <nav className="bg-black px-5 lg:px-0">
                <div className="max-w-[1380px] mx-auto py-5 flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <div className="py-1 w-[140px]">
                            <img className="block w-full" src={logo} alt="#MobileShop" />
                        </div>
                    </div>
                    {/* <div className="lg:w-[500px]">
                        <input
                            type="text"
                            placeholder="Search Products"
                            className="pl-4 py-3 rounded-3xl w-full"
                            required
                        />
                    </div> */}
                    <div className="mr-4 text-white">
                        <div className="flex items-center gap-1">
                            <Link>
                                <GrCart className="text-3xl" />
                            </Link>
                            <span className="bg-primary px-2 rounded-full text-sm">1</span>
                        </div>
                    </div>
                </div>
            </nav>
            <NavMenu />
        </div>
    );
};

export default Navbar;
