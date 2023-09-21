import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function Card2({ item }) {
  return (
    <div className="container">
      <div>
        <Card style={{ width: '18rem', margin: '10px' }}>
          <Card.Img variant="top" src={item.imageid} />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>{item.description}</Card.Text>
            <Card.Text>Precio: ${item.price}</Card.Text>
            <Card.Text>Stock: {item.stock}</Card.Text>
            <Card.Text>Categoría: {item.categoryId}</Card.Text>
            <Button variant="primary" as={Link} to={`/item/${item.id}`}>
              Ver Detalle
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Card2;


