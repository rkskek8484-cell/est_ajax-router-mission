import { useState } from 'react';
import { useNavigate } from 'react-router';
import styles from './postNew.module.css';

export default function PostNew({ onCreate }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  let navigate = useNavigate(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimedTitle = title.trim();
    const trimedContent = content.trim();
    if (!trimedTitle || !trimedContent) {
      alert('제목과 내용을 모두 입력해주세요');
      return;
    }
    const newId = onCreate({
      title: title,
      content: content,
    });

    navigate(`/post/${newId}`);
  };

  return (
    <section>
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
        <button type='submit'>등록</button>
      </form>
    </section>
  );
}
