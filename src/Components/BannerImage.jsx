import PropTypes from "prop-types";
//image component for Advertising banner
const BannerImage = ({ img }) => {
    return (
        <div>
            <img className="md:h-[227px] md:w-full" src={img} alt="LatestDeals" />
        </div>
    );
};
BannerImage.propTypes = {
    img: PropTypes.string.isRequired,
};
export default BannerImage;
