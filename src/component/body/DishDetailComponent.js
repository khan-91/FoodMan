import React from 'react'
import { Card } from 'react-bootstrap'

const DishDetailComponent = ({dish}) => {
  return (
    <div>
        <Card border="dark" style={{ width: '30rem', padding: 4, margin:10 }}>
        {/* <Card.Header>{dish.name}</Card.Header> */}
        <Card.Body>
          {/* <Card.Title>{dish.description}</Card.Title> */}
          <Card.Img variant="top" src={dish.image} />
          <Card.Text style={{textAlign:'left'}}>
            {dish.description}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default DishDetailComponent