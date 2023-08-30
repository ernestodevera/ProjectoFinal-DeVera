import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import propTypes from "prop-types";


const ItemDetail = ({ item, isLoading }) => {
  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (!item) {
    return <h2>Product not found</h2>;
  }

  return (
    

    <div>
      <h1>{item.name}</h1>
      <h2>{item.img}</h2>
      <p>${item.price}</p>
      <p>{item.category}</p>
    </div>
  );
}

ItemDetail.propTypes = {
  item: propTypes.object,
  isLoading: propTypes.bool,
};

export default ItemDetail;
