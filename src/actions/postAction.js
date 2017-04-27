import { ADD_POST, DELETE_POST, EDIT_POST } from './constants';

export const addPost = newPost => ({
  type: ADD_POST,
  payload: newPost,
});

export const deletePost = postId => ({
  type: DELETE_POST,
  payload: postId,
});

export const editPost = post => {
  return {
    type: EDIT_POST,
    payload: post,
  };
}
