import { useParams, Link, useNavigate } from 'react-router';

export default function PostDetail({ posts, onDelete }) {
  const { id } = useParams();
  let navigate = useNavigate();
  const post = posts.find((p) => p.id === Number(id));

  if (!post) {
    return (
      <div style={{ textAlign: 'center', padding: '50px 20px' }}>
        <h2>에러</h2>
        <p>입력하신 주소가 정확한지 다시 한번 확인해 주세요.</p>

        <Link to='/' style={{ fontSize: '18px', fontWeight: 'bold' }}>
          홈으로 돌아가기
        </Link>
      </div>
    );
  }

  const handleDelete = () => {
    if (window.confirm('정말 삭제할까요')) {
      onDelete(post.id);
      navigate('/posts');
    }
  };

  return (
    <>
      <h2>{post.title}</h2>
      <small>{post.createdAt}</small>
      <p>{post.content}</p>
      <div className='controls'>
        <Link to={`/post/edit/${post.id}`}>수정하기</Link>
        <button onClick={handleDelete}>삭제하기</button>
      </div>
    </>
  );
}
