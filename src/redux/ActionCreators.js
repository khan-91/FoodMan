import * as actionTypes from './ActionTypes'
import DISHES from '../data/dishes'
import axios from 'axios'
import { BaseUrl } from './BaseUrl'

export const addComment = (dishId, rating, author, comment) => ({
    type: actionTypes.ADD_COMMENT,
    payload: {
        dishId: dishId,
        author: author,
        rating: rating,
        comment: comment
    }
})

export const commentLoading = () => ({
    type : actionTypes.COMMENT_LOADING
})
//(comments)
export const loadComments = (comments) => ({
    type : actionTypes.LOAD_COMMENTS,
    payload : comments
})


export const loadDishes = dishes => ({
    type: actionTypes.LOAD_DISHES,
    payload: dishes,
})

export const dishesLoading = () => ({
    type: actionTypes.DISHES_LOADING
})

export const fetchComments = () => {
  return (dispatch) => {
    dispatch(commentLoading());

    
      axios.get(BaseUrl + 'comments')
      .then((response) => dispatch(loadComments(response.data)))
    //   .then((comments) => dispatch(loadComments(comments)))
      .catch((error) => {
        console.error("Error fetching comments:", error.message);
      });
  };
};

// export const fetchComments = dispatch => {
//     dispatch(commentLoading());

//     axios.get(BaseUrl + 'comments')
//     .then(response => response.data)
//     .then(comments => dispatch(loadComments(comments)))

// }

export const fetchDishes = () => {
    return dispatch => {
        dispatch(dishesLoading());

        axios.get(BaseUrl + 'dishes')
        .then(response => response.data)
        .then(dishes => dispatch(loadDishes(dishes)))
    }
}