import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { propTypes } from 'react-bootstrap/esm/Image';
import { Link } from 'react-router-dom';



function Card2({item}) {
  return (
    <Card style={{ width: '18rem',   }}>
      <Card.Img variant="top" src={item.img} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
          Precio: {item.price}
        </Card.Text>
        <Card.Text>
          Stock: {item.stock}
        </Card.Text>
        
        <Button variant="primary" as={Link} to={`/item/${item.id}`}>Ver Detalle</Button>
        
      </Card.Body>
    </Card>
  );
}

export default Card2;