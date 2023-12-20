import { TbTruckDelivery } from "react-icons/tb";
import { FaWhatsapp } from "react-icons/fa";
import { BiCommentAdd } from "react-icons/bi";
import { IoMdSettings } from "react-icons/io";

const Services = () => {
    return (
        <div className="mx-5 lg:mx-0 mt-6 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Services */}
            <div className="flex gap-3 rounded-md px-4 py-4 border shadow ">
                {/* logo container */}
                <div className="flex">
                    <div className="p-3 bg-primary rounded-full">
                        <TbTruckDelivery className="text-3xl text-white" />
                    </div>
                </div>
                {/* details container */}
                <div>
                    <h2 className="font-semibold text-lg">Home Shipping</h2>
                    <p className="text-sm">Free For All Order</p>
                </div>
            </div>
            {/*End of Services */}

            {/* Services */}
            <div className="flex gap-3 rounded-md px-4 py-4 border shadow ">
                {/* logo container */}
                <div className="flex">
                    <div className="p-3 bg-primary rounded-full">
                        <FaWhatsapp className="text-3xl text-white" />
                    </div>
                </div>
                {/* details container */}
                <div>
                    <h2 className="font-semibold text-lg">Online Support</h2>
                    <p className="text-sm">Get Support on Whatsapp</p>
                </div>
            </div>
            {/*End of Services */}

            {/* Services */}
            <div className="flex gap-3 rounded-md px-4 py-4 border shadow ">
                {/* logo container */}
                <div className="flex">
                    <div className="p-3 bg-primary rounded-full">
                        <BiCommentAdd className="text-3xl text-white" />
                    </div>
                </div>
                {/* details container */}
                <div>
                    <h2 className="font-semibold text-lg">Share Experience</h2>
                    <p className="text-sm">We Value your Feedback</p>
                </div>
            </div>
            {/*End of Services */}

            {/* Services */}
            <div className="flex gap-3 rounded-md px-4 py-4 border shadow ">
                {/* logo container */}
                <div className="flex">
                    <div className="p-3 bg-primary rounded-full">
                        <IoMdSettings className="text-3xl text-white" />
                    </div>
                </div>
                {/* details container */}
                <div>
                    <h2 className="font-semibold text-lg">Gadgets Care</h2>
                    <p className="text-sm">Repair Your Device</p>
                </div>
            </div>
            {/*End of Services */}
        </div>
    );
};

export default Services;
