import propTypes from "prop-types";
import Card2 from "../Item/Item";

const ItemList = ({ items, isLoading }) => {
  if (isLoading) {
    return <h2 className="row align-items-stretch justify-content-center">Loading...</h2>; 
  }

  return (
    <div className="container">
            
      <ul className="align-items-stretch justify-content-center">
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
