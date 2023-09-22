import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


function Card2({ item }) {
  return (
    <div className="container">
      <div>
        <Card>
          <Card.Img variant="top" src={item.imageid} />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>{item.description}</Card.Text>
            <Card.Text>Price: ${item.price}</Card.Text>
            <Card.Text>Stock: {item.stock}</Card.Text>
            <Card.Text>Category: {item.categoryId}</Card.Text>
            <Button className="btn btn-danger" variant="primary" as={Link} to={`/item/${item.id}`}>
            See detail
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Card2;


