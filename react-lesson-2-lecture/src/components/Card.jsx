import PropTypes from "prop-types";

function Card(props) {
  return (
    <div className="Card">
      <h1>{props.itemTitle}</h1>
      <p>{props.isInStock ? "In Stock" : "Out of Stock"}</p>
      <h4>{props.itemPrice} $</h4>
    </div>
  );
}

Card.prototype = {
  itemTitle: PropTypes.string,
  itemInStock: PropTypes.bool,
  itemPrice: PropTypes.number,
};

export default Card;
