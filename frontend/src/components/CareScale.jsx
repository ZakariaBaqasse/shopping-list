import PropTypes from "prop-types";

const CareScale = ({ careType, scale }) => {
  const svgToRender =
    careType === "light" ? "/assets/sun.svg" : "/assets/water.svg";
  return (
    <div>
      {[...Array(scale)].map((element) => {
        return <img src={svgToRender} key={element} />;
      })}
    </div>
  );
};

CareScale.propTypes = {
  careType: PropTypes.string.isRequired,
  scale: PropTypes.number.isRequired,
};

export default CareScale;
