import propTypes from "prop-types";
import { Link } from "react-router-dom";

const ItemList = ({ items, isLoading }) => {
  if (isLoading) {
    return <h2>Loading...</h2>; 
  }

  return (
    <div className="container">
    
      <div>
      <h1>ItemList</h1>
      </div>

      <ul>
        {items.map((item) => (
          <div key={item.id}>
            <Link to={`/item/${item.id}`}>
          
              <h3>{item.name}</h3>
              <p>${item.price}</p>
              <p>{item.category}</p>
            </Link>
          </div>

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
