import React from 'react';

import PostList from './PostList/';

const styles = {
  content: {
    flex: 1,
    padding: 20,
    paddingTop: 100,
  },
};

const Content = () => (
  <div style={styles.content}>
    <h2>Recent Posts</h2>
    <PostList />
  </div>
);

export default Content;
