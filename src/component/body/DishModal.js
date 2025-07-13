
import { Modal } from 'react-bootstrap';
import LoadCommentsComponent from './LoadCommentsComponent';
import { connect } from 'react-redux';
import CommentForm from './CommentForm';
import COMMENTS from '../../data/comments';

const DishModal = ({ show, onHide, dish, comments, addComment }) => {

  if (!dish) return null;
  const filteredComments = comments.filter(c => c.dishId === dish.id)

  return (
    <Modal show={show} onHide={onHide} size="md">
      <Modal.Header closeButton>
        <Modal.Title>{dish.name}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <img
          src={dish.image}
          alt={dish.name}
          style={{ width: '100%', maxHeight: '200px', objectFit: 'contain', marginBottom: '10px' }}
        />
        <p><strong>Description:</strong> {dish.description}</p>
        <p><strong>Price:</strong> {dish.price}/-</p>

        <hr />
        <h5>Comments:</h5>
        <LoadCommentsComponent comments={filteredComments} />
        <hr />
        <h5>Add a Comment:</h5>
        <CommentForm addComment={addComment} dishId={dish.id} onSubmit={(newComment) => console.log("Submitted Comment:", newComment)} />
      </Modal.Body>
    </Modal>
  );
};

export default DishModal;