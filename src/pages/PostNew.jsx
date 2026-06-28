export default function PostNew({ onCreate }) {
  return (
    <section>
      <h2>글 작성</h2>
      <form>
        <input type='text' placeholder='제목' />
        <textarea name='' id='' placeholder='내용'></textarea>
      </form>
      <button type='button'>등록</button>
    </section>
  );
}
