export const filterPost = (posts, searchKeyword) => (
  posts.filter(post => post.title.includes(searchKeyword))
);
