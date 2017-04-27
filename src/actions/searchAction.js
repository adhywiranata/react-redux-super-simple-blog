import { SET_SEARCH_KEYWORD } from './constants';

export const setSearchKeyword = searchKeyword => ({
  type: SET_SEARCH_KEYWORD,
  payload: searchKeyword,
});
