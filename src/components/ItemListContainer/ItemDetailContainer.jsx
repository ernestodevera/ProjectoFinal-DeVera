import { useState, useEffect } from "react";
import { useParams  } from "react-router-dom";
import { getProduct } from "../../services";
import ItemDetail from "./itemDetail";

const ItemDetailContainer = () => {
  const [item, setItems] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    getProduct(id)
    .then((response) => {
      setItems(response);
    })
    .catch(() => {
      setItems(null); 
    })
    .finally(() => {
      setIsLoading(false);
    });
  }, [id]); 
  
  return <ItemDetail item={item} isLoading={isLoading}/>;  
};

export default ItemDetailContainer;