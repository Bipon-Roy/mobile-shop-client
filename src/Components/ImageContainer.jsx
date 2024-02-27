import PropTypes from "prop-types";
//image component
const ImageContainer = ({ img, title }) => {
    return <img src={img} alt={title} />;
};
ImageContainer.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string,
};
export default ImageContainer;
