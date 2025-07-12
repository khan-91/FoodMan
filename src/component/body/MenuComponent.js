

import React, { Component } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import DISHES from '../../data/dishes'; // Replace with your correct path
import DishModal from './DishModal'; // Replace with your correct path

class MenuComponent extends Component {
  state = {
    dishes: DISHES,
    selectedDish: null,
    showModal: false, // ✅ You missed this
  };

  onSelectDish = (dish) => {
    this.setState({ selectedDish: dish, showModal: true }); // ✅ Open modal on select
  };

  handleCloseModal = () => {
    this.setState({ showModal: false }); // ✅ Close modal
  };

  render() {
    return (
      <div className="container">
        <Row xs={1} md={2} className="g-4">
          {this.state.dishes.map((dish) => (
            <Col style={{padding:5}} key={dish.id}>
              <Card
                border="dark"
                style={{cursor: 'pointer' }}
                onClick={() => this.onSelectDish(dish)}
              >
                <Card.Img
                  variant="top"
                  src={dish.image}
                  style={{ height: '160px', objectFit: 'cover' }}
                />
                <Card.Body>
                  <Card.Title style={{ fontWeight: 'bold' }}>{dish.name}</Card.Title>
                </Card.Body>
                <Card.Footer>
                  <small>Price: {dish.price}/-</small>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>

        {/* ✅ Modal appears here */}
        <DishModal
          show={this.state.showModal}
          onHide={this.handleCloseModal}
          dish={this.state.selectedDish}
        />
      </div>
    );
  }
}

export default MenuComponent;
