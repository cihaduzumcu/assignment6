import Post from "./Post";

function PostList({ posts }) {
  return (
    <ul>
      {posts.map((post) => (
        <Post key={post.id} title={post.title} body={post.body} />
      ))}
    </ul>
  );
}

export default PostList;