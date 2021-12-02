import P from 'prop-types';

import { PostCard } from '../PostCard';
import './styles.css';

export const Posts = ({ posts = [] }) => (
  <div className="posts">
    {posts.map((post) => (
      <PostCard title={post.title} key={post.id} cover={post.cover} body={post.body} />
    ))}
  </div>
);

Posts.default = {
  posts: [],
};

Posts.propTypes = {
  posts: P.arrayOf(
    P.shape({
      title: P.string.isRequired,
      cover: P.string.isRequired,
      body: P.string.isRequired,
    })
  ),
};
