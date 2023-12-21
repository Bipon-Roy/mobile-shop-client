import PropTypes from "prop-types";
// reusable component for category item
const CategoryItem = ({ img, title }) => {
    return (
        <div className="py-6  flex flex-col justify-center items-center bg-[#F6F8FA] space-y-2 rounded-xl hover:hover:text-primary">
            <img
                className="w-[70px] h-[70px] filter grayscale transition-all hover:filter-none"
                src={img}
                alt="Category Icon"
            />
            <p className="font-medium text-sm md:text-base text-center">{title}</p>
        </div>
    );
};
CategoryItem.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};
export default CategoryItem;
