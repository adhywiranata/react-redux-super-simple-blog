import React from 'react';
import { connect } from 'react-redux';

import { filterPost } from '../../selectors';
import PostItem from './PostItem';

const styles = {
  postList: {
    padding: 5,
  },
};

const PostList = ({ posts, searchKeyword }) => (
  <div style={styles.postList}>
    { posts.map(post => <PostItem key={post.id} {...post} />)}
    { posts.length === 0 && <p>Sorry, no post found!</p> }
  </div>
);

const mapStateToProps = state => ({
  posts: filterPost(state.posts, state.searchKeyword),
  searchKeyword: state.searchKeyword,
});

export default connect(mapStateToProps, null)(PostList);
