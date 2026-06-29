import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import styles from './postNew.module.css';

export default function PostEdit({ posts, onUpdate }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const { id } = useParams();
  let navigate = useNavigate();

  const post = posts.find((p) => p.id === Number(id));
  // console.log(post);

  useEffect(() => {
    if (!post) return;
    // eslint-disabled-next-line
    setTitle(post.title);
    setContent(post.content);
  }, [post]);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimedTitle = title.trim();
    const trimedContent = content.trim();
    if (!trimedTitle || trimedContent) {
      alert('제목과 내용을 모두 입력해주세요');
      return;
    }
    onUpdate(Number(id), {
      title: title,
      content: content,
    });

    navigate(`/post/${id}`); //현재 게시글 상세로 이동
  };

  return (
    <>
      <h2>글 작성</h2>
      <form action='' className={styles.form} onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='제목'
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <textarea
          name=''
          id=''
          placeholder='내용'
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
        ></textarea>
        <button type='button'>등록</button>
      </form>
    </>
  );
}
