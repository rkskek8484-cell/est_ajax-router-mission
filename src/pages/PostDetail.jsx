import { useParams, Link, useNavigate, Navigate } from 'react-router';

export default function PostDetail({ posts, onDelete }) {
  const { id } = useParams();
  const post = posts.find((p) => String(p.id) === String(id));

  if (!post) {
    return alert('존재하지 않는 글입니다.');
  }

  const handleDeleteClick = () => {
    const isConfirmed = window.confirm('정말 삭제할까요');
    if (isConfirmed) {
      onDelete(post.id);
      Navigate('/posts');
    }
  };

  return (
    <section>
      <h2>{post.title}</h2>
      <p>{post.createdAt}</p>
      <p>{post.content}</p>
      <div>
        <Link to={`/posts/${post.id}/edit`}>수정하기</Link>
        <button onClick={handleDeleteClick}>삭제</button>
      </div>
    </section>
  );
}
