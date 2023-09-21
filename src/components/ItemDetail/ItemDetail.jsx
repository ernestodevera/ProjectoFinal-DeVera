import React from 'react';
import { Card, ListGroup, ListGroupItem, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';
import { Link } from 'react-router-dom';

const ItemDetail = ({ item, isLoading, addItem }) => {
  if (isLoading) {
    return <h2 className="row justify-content-center">Loading...</h2>;
  }

  if (!item) {
    return <h2>Product not found</h2>;
  }

  return (
    <Card style={{ width: '100%' }}>
      <div>
        <Col md={4}>
          <Card.Img variant="top" src={item.imageid} />
        </Col>
        <Col md={8}>
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>Description: {item.description}</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Price: {item.price}</ListGroupItem>
            <ListGroupItem>Stock: {item.stock}</ListGroupItem>
            <ListGroupItem>Category: {item.categoryId}</ListGroupItem>
          </ListGroup>
        </Col>
      </div>
      <Row>
        <Col md={8} className="ml-auto">
          <div className="container">
            <ItemCount
              initial={1}
              stock={item.stock}
              onAdd={(quantity) => addItem(item, quantity)}
            ></ItemCount>
          </div>
          <div className="container">
            <Link to="/" className="btn btn-danger">
              Back
            </Link>
          </div>
        </Col>
      </Row>
    </Card>
  );
};

ItemDetail.propTypes = {
  item: PropTypes.object,
  isLoading: PropTypes.bool,
  addItem: PropTypes.func,
};

export default ItemDetail;
