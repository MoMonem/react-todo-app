import PropTypes from "prop-types";

const Button = ({ text, classes }) => {
  return <button className={classes}>{text}</button>;
};

Button.defaultProps = {
  text: "Submit",
};

Button.propTypes = {
  text: PropTypes.string,
};

export default Button;
