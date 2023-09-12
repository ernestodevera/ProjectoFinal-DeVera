import Card from 'react-bootstrap/Card';
import propTypes from "prop-types";
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css'
import { ListGroup, ListGroupItem } from 'react-bootstrap';


const ItemDetail = ({ item, isLoading }) => {
  if (isLoading) {
    return <h2 className="row justify-content-center">Loading...</h2>;
  }

  if (!item) {
    return <h2>Product not found</h2>;
  }

  return (

    <Card style={{ width: '18rem',   }}>
      <Card.Img variant="top" src={item.img}/>
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>Definicion del item extendido blalbalblablablablabalbabalbalbalbablbasbasbasbasb</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Precio: {item.price}</ListGroupItem>
          <ListGroupItem>Stock: {item.stock}</ListGroupItem>
        </ListGroup>

    <div className='container'> 
      <ItemCount initial={1} stock={item.stock} onAdd={(quantity) => console.log("cantidad agregada")}></ItemCount>
    </div> 
    </Card> 
  );
}

ItemDetail.propTypes = {
  item: propTypes.object,
  isLoading: propTypes.bool,
};

export default ItemDetail;
