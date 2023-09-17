import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { propTypes } from 'react-bootstrap/esm/Image';
import { Link } from 'react-router-dom';



function Card2({item}) {
  return (
    <Card style={{ width: '18rem',   }}>
      <Card.Img variant="top" src={item.imageid} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>
          Descripcion: {item.description}
        </Card.Text>
        <Card.Text>
          Precio: {item.price}
        </Card.Text>
        <Card.Text>
          Stock: {item.stock}
        </Card.Text>
        <Card.Text>
          Category: {item.categoryId}
        </Card.Text>
        
        <Button variant="primary" as={Link} to={`/item/${item.id}`}>Ver Detalle</Button>
        
      </Card.Body>
    </Card>
  );
}

export default Card2;