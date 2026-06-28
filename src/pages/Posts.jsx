import { Link } from 'react-router';

export default function Posts({ posts }) {
  return (
    <div>
      <h2>글 목록</h2>
      <ul>
        {posts.map((p) => (
          <li key={p.id}>
            <Link to={`/posts/${p.id}`}>{p.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
