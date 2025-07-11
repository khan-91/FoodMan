import React from 'react'
import { Card, CardGroup } from 'react-bootstrap'
const MenuItem = ({ dish, onSelectDish }) => {
    return (
            <Card border='dark' style={{padding:4, margin:10, cursor:'pointer'}} onClick={() => onSelectDish(dish)}>
                <Card.Img variant="top" src={dish.image} style={{ height: 120 }} />
                <Card.Body>
                    <Card.Title style={{fontSize:30, fontWeight:'bold'}}>{dish.name}</Card.Title>
                </Card.Body>
                <Card.Footer>
                    <small>Price: {dish.price}</small>
                </Card.Footer>
            </Card>
    )
}

export default MenuItem