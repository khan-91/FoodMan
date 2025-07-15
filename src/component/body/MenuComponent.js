import { Component } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import DishModal from './DishModal';
import { connect } from 'react-redux';
import * as actionTypes from '../../redux/ActionTypes'
import { addComment, fetchComments, fetchDishes } from '../../redux/ActionCreators';
import Loading from './Loading';
import { BaseUrl } from '../../redux/BaseUrl';
const mapStateToProps = state => {

  return {
    dishes: state.dishes,
    comments: state.comments
  };
}

const mapDispatchToProps = dispatch => ({
  addComment: (dishId, author, rating, comment) =>
    dispatch(addComment(dishId, rating, author, comment)),
  fetchDishes: () => dispatch(fetchDishes()),
  fetchComments: () => dispatch(fetchComments())
});

class MenuComponent extends Component {
  state = {
    selectedDish: null,
    showModal: false,
  };

  onSelectDish = (dish) => {
    this.setState({ selectedDish: dish, showModal: true });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };

  componentDidMount() {
    this.props.fetchDishes();
    this.props.fetchComments();
  }

  render() {
    document.title = "Menu"
    if (this.props.dishes.isLoading) {
      return (
        <Loading />
      )
    }
    else {
      return (
        <div className="container">
          <Row xs={1} md={2} className="g-4">
            {this.props.dishes.dishes.map((dish) => (
              <Col style={{ padding: 5 }} key={dish.id}>
                <Card
                  border="dark"
                  style={{ cursor: 'pointer' }}
                  onClick={() => this.onSelectDish(dish)}
                >
                  <Card.Img
                    variant="top"
                    src={BaseUrl + dish.image}
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

          <DishModal
            addComment={this.props.addComment}
            show={this.state.showModal}
            onHide={this.handleCloseModal}
            dish={this.state.selectedDish}
            comments={this.props.comments}
            commentsIsLoading = {this.props.comments.isLoading}
          />
        </div>
      );
    }
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(MenuComponent);
