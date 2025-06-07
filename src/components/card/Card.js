import PropTypes from "prop-types";
import "./card.css";

export default function Card({ children, className = "" }) {
  return <div className={`card ${className}`}>{children}</div>;
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
