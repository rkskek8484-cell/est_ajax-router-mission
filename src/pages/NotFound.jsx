import { Link } from 'react-router';

export default function NotFound() {
  return (
    <div style={{ textAlign: 'center', padding: '50px 20px' }}>
      <h2>404 - 페이지를 찾을 수 없습니다</h2>
      <p>입력하신 주소가 정확한지 다시 한번 확인해 주세요.</p>

      <Link to='/' style={{ fontSize: '18px', fontWeight: 'bold' }}>
        홈으로 돌아가기
      </Link>
    </div>
  );
}
