import { SET_SEARCH_KEYWORD } from '../actions/constants';

const searchReducer = (state = '', action) => {
  switch (action.type) {
    case SET_SEARCH_KEYWORD: return action.payload;
    default: return state;
  }
};

export default searchReducer;
