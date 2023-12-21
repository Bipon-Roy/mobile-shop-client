import { Outlet } from "react-router-dom";
import Navbar from "./Pages/Shared/Navbar/Navbar";
import Footer from "./Pages/Shared/Footer/Footer";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
    // configuration for AOS animation library
    useEffect(() => {
        AOS.init({
            delay: 0,
            duration: 1000,
            anchorPlacement: "top-bottom",
            once: true,
        });
    }, []);
    return (
        <div className="overflow-hidden">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
}

export default App;
