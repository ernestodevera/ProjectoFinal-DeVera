import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import propTypes from "prop-types";
import ItemCount from '../ItemCount/ItemCount';


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
      <p>${item.price}</p>
      <p>{item.category}</p>
      <p>{item.stock}</p>
      
      <img src={item.img} ></img>

      <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log("cantidad agregada")}></ItemCount>
    </div>
  );
}

ItemDetail.propTypes = {
  item: propTypes.object,
  isLoading: propTypes.bool,
};

export default ItemDetail;
