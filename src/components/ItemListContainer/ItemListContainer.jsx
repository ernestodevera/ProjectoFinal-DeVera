import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts } from '../../services';
import Item from '../Item/Item'; 

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setIsLoading(true);

    getProducts(categoryId).then((response) => {
      setItems(response);
      setIsLoading(false);
    });
  }, [categoryId]);

  return (
    <div className="container">
      <div className="row">
        {isLoading ? (
          <h2>Loading...</h2>
        ) : (
          items.map((item) => (
            <div key={item.id} className="col-md-4">
              <Item item={item} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ItemListContainer;
