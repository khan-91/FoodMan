import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => ({
  addComment: (dishId, author, rating, comment) =>
    dispatch({
      type: "ADD_COMMENT",
      payload: {
        dishId,
        author,
        rating,
        comment
      }
    })
});

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: '',
      rating: '5',
      comment: '',
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { author, rating, comment } = this.state;

    if (author && comment) {
      this.props.addComment(this.props.dishId, author, rating, comment);

      if (this.props.onSubmit) {
        this.props.onSubmit({ author, rating, comment });
      }

      this.setState({
        author: '',
        rating: '5',
        comment: '',
      });
    } else {
      alert('Please enter both your name and comment.');
    }
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group className="mb-2">
          <Form.Control
            type="text"
            placeholder="Enter your name"
            name="author"
            value={this.state.author}
            required
            onChange={this.handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-2">
          <Form.Label>Rating</Form.Label>
          <Form.Select
            name="rating"
            value={this.state.rating}
            onChange={this.handleChange}
          >
            <option value="1">1 - Poor</option>
            <option value="2">2 - Fair</option>
            <option value="3">3 - Good</option>
            <option value="4">4 - Very Good</option>
            <option value="5">5 - Excellent</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Comment</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="comment"
            placeholder="Write your comment here"
            value={this.state.comment}
            required
            onChange={this.handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit Comment
        </Button>
      </Form>
    );
  }
}

export default connect(null, mapDispatchToProps)(CommentForm);
