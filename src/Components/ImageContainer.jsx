import PropTypes from "prop-types";

const ImageContainer = ({ img, title, width, height }) => {
    const classes = `${width ? `w-${width}` : ""} ${height ? `h-${height}` : ""}`;
    console.log(classes);
    return <img src={img} alt={title} className={classes} />;
};

ImageContainer.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
};

export default ImageContainer;
