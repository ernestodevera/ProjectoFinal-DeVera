import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';


const ItemCount = ({ stock, initial, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="ItemCount">
      <div className="d-flex align-items-center">
        <Button
          variant="danger"
          size="sm" 
          onClick={decrement}
          className="ml-2"
        >
          -
        </Button>
        <h3 className="m-0">{quantity}</h3>
        <Button
          variant="danger"
          size="sm" 
          onClick={increment}
          className="ml-2"

        >
          +
        </Button>
      </div>

      <div className="mt-2">
        <Button
          variant="danger"
          onClick={() => onAdd(quantity)}
          disabled={!stock || quantity === 0}
        >
        Add to cart
        </Button>
      </div>
    </div>
  );
};

export default ItemCount;
