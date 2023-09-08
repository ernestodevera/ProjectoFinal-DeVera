import propTypes from "prop-types";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Card2 from "../Item/Item";

const ItemList = ({ items, isLoading }) => {
  if (isLoading) {
    return <h2>Loading...</h2>; 
  }

  return (
    <div className="container">

      <br></br>
      
      <ul className="row align-items-stretch justify-content-center">
        {items.map((item) => (
          <Card2 key={item.id} item={item} />
        ))}
      </ul>
      
    </div>
  );
};

ItemList.prototypes = {
  items: propTypes.array.isRequired,
  isLoading: propTypes.bool,
};

export default ItemList;
