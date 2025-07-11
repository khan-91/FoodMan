import React from 'react'
import { Card, CardGroup } from 'react-bootstrap'
const MenuItem = ({ dish }) => {
    return (
            <Card border='dark' style={{padding:4, margin:10}}>
                <Card.Img variant="top" src={dish.image} />
                <Card.Body>
                    <Card.Title style={{fontSize:30, fontWeight:'bold'}}>{dish.name}</Card.Title>
                    <Card.Text style={{color:'green'}} >
                        {dish.description}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small>Price: {dish.price}</small>
                </Card.Footer>
            </Card>
    )
}

export default MenuItem