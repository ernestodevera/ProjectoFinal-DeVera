import propTypes from "prop-types";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Card2 from "../Card/Card";

const ItemList = ({ items, isLoading }) => {
  if (isLoading) {
    return <h2>Loading...</h2>; 
  }

  return (
    <div className="container">
    
      <div>
      <h1>ItemList</h1>
      </div>

      <ul className="row">
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
