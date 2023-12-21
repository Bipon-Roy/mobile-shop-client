import { useState } from "react";
import useProducts from "../../../hooks/useProducts";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import BrandProducts from "./BrandProducts";
import "./Tab.css";
const Brands = () => {
    const brands = ["Apple", "Samsung", "Google", "Oneplus", "Xiaomi"];
    const initialIndex = brands.indexOf(brands);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [phones] = useProducts();

    const apple = phones.filter((phone) => phone.brandName === "Apple");
    const samsung = phones.filter((phone) => phone.brandName === "Samsung");
    const google = phones.filter((phone) => phone.brandName === "Google");
    const oneplus = phones.filter((phone) => phone.brandName === "Oneplus");
    const xiaomi = phones.filter((phone) => phone.brandName === "Xiaomi");

    return (
        <div className="my-8">
            <div className="text-center">
                <h1 className="font-semibold text-2xl uppercase">Available Brands</h1>
            </div>
            <div className="mt-6">
                <Tabs defaultIndex={tabIndex[0]} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>Apple</Tab>
                        <Tab>Samsung</Tab>
                        <Tab>Google</Tab>
                        <Tab>Oneplus</Tab>
                        <Tab>Xiaomi</Tab>
                    </TabList>
                    <TabPanel>
                        <BrandProducts phones={apple}></BrandProducts>
                    </TabPanel>
                    <TabPanel>
                        <BrandProducts phones={samsung}></BrandProducts>
                    </TabPanel>
                    <TabPanel>
                        <BrandProducts phones={google}></BrandProducts>
                    </TabPanel>
                    <TabPanel>
                        <BrandProducts phones={oneplus}></BrandProducts>
                    </TabPanel>
                    <TabPanel>
                        <BrandProducts phones={xiaomi}></BrandProducts>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Brands;
