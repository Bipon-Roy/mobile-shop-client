import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Pages/Shared/Navbar/Navbar";
import Footer from "./Pages/Shared/Footer/Footer";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
    const location = useLocation();
    // configuration for AOS animation library
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top on route change
        AOS.init({
            delay: 0,
            duration: 1000,
            anchorPlacement: "top-bottom",
            once: true,
        });
    }, [location.pathname]);
    return (
        <div className="overflow-hidden min-h-screen flex flex-col">
            <div className="flex-none">
                <Navbar />
            </div>
            <div className="flex-grow">
                <Outlet />
            </div>
            <div className="flex-none">
                <Footer />
            </div>
        </div>
    );
}

export default App;
