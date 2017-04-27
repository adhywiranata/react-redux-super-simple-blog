import { ADD_POST, DELETE_POST, EDIT_POST } from '../actions/constants';

const initialState = [
  { id: 1, title: 'how to learn react', description: 'lorem ipsum' },
  { id: 3, title: 'how to learn redux', description: 'lorem ipsum redux' },
  { id: 2, title: 'how to learn vue', description: 'lorem ipsum vue' },
];

const addPost = (state, newPost) => {
  const { title, description } = newPost;
  const ids = state.map(post => post.id);
  const newId = Math.max(...ids) + 1;
  const post = {
    id: newId,
    title,
    description,
  };
  const newState = [...state, post];
  return newState;
};

const deletePost = (state, postId) => {
  const newState = state.filter(post => post.id !== postId);
  return newState;
};

const editPost = (state, updatedPost) => {
  const newState = state.map(post => {
    if (post.id === updatedPost.id) {
      return {
        ...post,
        title: updatedPost.title,
        description: updatedPost.description
      };
    }
    return post;
  });
  return newState;
}

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: return addPost(state, action.payload);
    case DELETE_POST: return deletePost(state, action.payload);
    case EDIT_POST: return editPost(state, action.payload);
    default: return state;
  }
};

export default postReducer;
