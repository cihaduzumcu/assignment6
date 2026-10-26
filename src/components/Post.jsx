function Post({ title, body }) {
  return (
    <li>
      <h3>{title}</h3>
      <p>{body}</p>
    </li>
  );
}

export default Post;