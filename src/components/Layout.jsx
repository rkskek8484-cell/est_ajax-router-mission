import { Outlet } from 'react-router';
import Header from './Header';
import styles from './Layout.module.css';

export default function Layout({ loaded }) {
  return (
    <div className='header'>
      <Header />
      {!loaded ? <p>로딩 중...</p> : <Outlet />}
    </div>
  );
}
