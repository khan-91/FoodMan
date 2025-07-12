import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import LoadCommentsComponent from './LoadCommentsComponent';
import COMMENTS from '../../data/comments';

const DishModal = ({ show, onHide, dish }) => {
  if (!dish) return null;
  const filteredComments = COMMENTS.filter(c => c.dishId === dish.id)

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
      </Modal.Body>

      {/* <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  );
};

export default DishModal;

