// Importing images

import phones from "../../../assets/Images/Phones20Tablets.webp";
import power from "../../../assets/Images/power-adapter-6971.webp";
import macbook from "../../../assets/Images/Macbook-01-4687.webp";
import watch from "../../../assets/Images/Smartwatch1.webp";
import airpods from "../../../assets/Images/airpods-8799.webp";
import headphone from "../../../assets/Images/Overhead20Headphone-01-1816.webp";
import speaker from "../../../assets/Images/Speaker-01-9933.webp";
import wired from "../../../assets/Images/Wired20Headphone-01-5206.webp";

import wirelessHeadPhones from "../../../assets/Images/Wireless20Headphone-3640.webp";
import cable from "../../../assets/Images/Cable20interconnects.webp";
import powerBank from "../../../assets/Images/power-bank-8067.webp";
import wirelessCharger from "../../../assets/Images/Wireless20Charger-01-2920.webp";
import hubs from "../../../assets/Images/Hubs20Dock-01-5487.webp";
import cover from "../../../assets/Images/Cover20Glass-01-6747.webp";
import drone from "../../../assets/Images/Drone20Camera-01-6999.webp";
import keyboards from "../../../assets/Images/peripherals-8306.webp";

import CategoryItem from "./CategoryItem";

const Categories = () => {
    return (
        <div className="mt-12">
            <div className="space-y-2 text-center">
                <h1 className="font-semibold text-2xl">FEATURED CATEGORIES</h1>
                <p>Get your desired product from featured category</p>
            </div>
            <div className="mx-5 lg:mx-0 my-8 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-y-5 gap-x-2">
                {/* First Row */}
                <CategoryItem img={phones} title="Phones & Tablet" />
                <CategoryItem img={power} title="Power & Adapter" />
                <CategoryItem img={macbook} title="MacBook" />
                <CategoryItem img={watch} title="Smart Watch" />
                <CategoryItem img={airpods} title="Airpods" />
                <CategoryItem img={headphone} title="Overhead Headphones" />
                <CategoryItem img={speaker} title="Speakers" />
                <CategoryItem img={wired} title="Wired Headphone" />

                {/* Second Row */}

                <CategoryItem img={wirelessHeadPhones} title="Wireless Headphone" />
                <CategoryItem img={cable} title="Cable & Interconnects" />
                <CategoryItem img={powerBank} title="Power Bank" />
                <CategoryItem img={wirelessCharger} title="Wireless Charger" />
                <CategoryItem img={hubs} title="Hubs & Docks" />
                <CategoryItem img={cover} title="Cover & Glass" />
                <CategoryItem img={drone} title="Drone & Camera" />
                <CategoryItem img={keyboards} title="Mouse & Keyboard" />
            </div>
        </div>
    );
};

export default Categories;
