import { useLoaderData, useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

const ProductDetails = () => {
    const phones = useLoaderData();
    const { name, brandName, price, shortDesc, photo, desc, keyFeature } = phones;
    const navigate = useNavigate();

    return (
        <div className="max-w-[1380px] mx-auto my-11">
            <div className="flex flex-col md:flex-row mx-6 lg:mx-0  gap-10">
                <div className="rounded-xl">
                    <img src={photo} alt={name} />
                </div>
                <div className="space-y-3  w-fit font-medium ">
                    <div className="flex justify-between">
                        <p className="text-3xl text-primary font-semibold">{name}</p>
                        <button
                            onClick={() => navigate(-1)}
                            className=" text-lg bg-primary text-white p-2 rounded-full"
                        >
                            <BiArrowBack />
                        </button>
                    </div>

                    <p className="font-medium">{shortDesc}</p>
                    <p className="font-medium">Brand: {brandName}</p>
                    <p className="text-primary font-bold rounded-lg ">Price: {price}</p>

                    <p>
                        <span className="font-bold">Description:</span> {desc}
                    </p>
                    <p>
                        <span className="font-bold">Key Feature:</span> {keyFeature}
                    </p>
                    <p>
                        <span className="font-bold">Warranty Policy:</span> 1-year
                        manufacturer&apos;s warranty
                    </p>
                    <div className="pt-10">
                        <button className="py-2 w-full bg-primary font-medium text-white rounded">
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
