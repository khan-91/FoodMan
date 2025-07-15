import React from 'react'
import { Card, CardGroup } from 'react-bootstrap'
import { BaseUrl } from '../../redux/BaseUrl';
const MenuItem = ({ dish, onSelectDish }) => {
    return (
        <Card
            border="dark"
            style={{ padding: 4, marginBottom: 20, cursor: 'pointer' }}
            onClick={() => onSelectDish(dish)}
        >
            <Card.Img variant="top" src={BaseUrl + dish.image} style={{ height: 120 }} />
            <Card.Body>
                <Card.Title style={{ fontSize: 20, fontWeight: 'bold' }}>{dish.name}</Card.Title>
            </Card.Body>
            <Card.Footer>
                <small>Price: {dish.price}/-</small>
            </Card.Footer>
        </Card>
    );
};

export default MenuItem


