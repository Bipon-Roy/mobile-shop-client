import PropTypes from "prop-types";
//image component for all products page
const CardImageContainer = ({ img, title }) => {
    return <img className="w-[140px] h-[150px]" src={img} alt={title} />;
};
CardImageContainer.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string,
};
export default CardImageContainer;
