
import { Modal } from 'react-bootstrap';
import LoadCommentsComponent from './LoadCommentsComponent';
import { connect } from 'react-redux';
import CommentForm from './CommentForm';
import COMMENTS from '../../data/comments';
import { fetchComments } from '../../redux/ActionCreators';
import { BaseUrl } from '../../redux/BaseUrl';

const DishModal = ({ show, onHide, dish, comments, addComment }) => {
  console.log("Dish prop in DishModal:", dish);
  console.log("Comments prop in DishModal:", comments);
  if (!dish) return null;
  // const filteredComments = comments.filter(c => c.dishId === dish.id)
  
  // const filteredComments = Array.isArray(comments.comments)
  //   ? comments.comments.filter(c => c.dishId === dish.id)
  //   : [];
const filteredComments = comments.comments?.filter(c => c.dishId === Number(dish.id)) || [];


  // const filteredComments = comments.comments?.filter(c => c.dishId === dish.id) || [];
  console.log("COMMENTS PROP:", comments);
  console.log("Filtered Comments:", filteredComments);
  return (
    <Modal show={show} onHide={onHide} size="md">
      <Modal.Header closeButton>
        <Modal.Title>{dish.name}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <img
          src={BaseUrl + dish.image}
          alt={dish.name}
          style={{ width: '100%', maxHeight: '200px', objectFit: 'contain', marginBottom: '10px' }}
        />
        <p><strong>Description:</strong> {dish.description}</p>
        <p><strong>Price:</strong> {dish.price}/-</p>

        <hr />
        <h5>Comments:</h5>
        <LoadCommentsComponent comments={filteredComments} commentsIsLoading = {comments.commentsIsLoading}/>
        <hr />
        <h5>Add a Comment:</h5>
        <CommentForm addComment={addComment} dishId={dish.id} onSubmit={(newComment) => console.log("Submitted Comment:", newComment)} />
      </Modal.Body>
    </Modal>
  );
};

export default DishModal;