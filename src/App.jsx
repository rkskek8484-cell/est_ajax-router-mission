import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route, NavLink, useParams } from 'react-router';
import Layout from './components/Layout';
import Header from './components/Header';
import Home from './pages/Home';
import Posts from './pages/Posts';
import PostDetail from './pages/PostDetail';
import PostNew from './pages/PostNew';
import NotFound from './pages/NotFound';

function App() {
  const [posts, setPosts] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // let alive = true; // 상품조회 시작..열일 중.
    const controller = new AbortController();

    async function fetchData() {
      try {
        const res = await fetch('/data/blog.json', {
          signal: controller.signal,
        });
        if (!res.ok) throw new Error('메시지');
        const data = await res.json();
        setPosts(data);
      } catch (e) {
        console.error(e);
        setPosts([]); // 에러 시 목록을 비움.
      } finally {
        setLoaded(true);
      }
    }
    fetchData();

    return () => {
      // alive = false;
      controller.abort();
    }; // 정리함수
  }, []);

  console.log(posts);

  const handleDelete = () => {
    // if (window.confirm('정말 삭제할까요')) {
    setPosts(posts.filter((posts) => post.id !== id));
    // }
  };

  const handleCreate = () => {};

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout loaded={loaded} />}>
          <Route index element={<Home posts={posts} />} />
          <Route path='posts' element={<Posts posts={posts} />} />
          <Route path='posts/:id' element={<PostDetail posts={posts} onDelete={handleDelete} />} />
          <Route path='posts/new' element={<PostNew posts={posts} onCreate={handleCreate} />} />
          {/* <Route path='/posts/:id/edit' element={<PostEdit posts={posts} onCreate={handleCreate} />} /> */}
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>

      {/* <Header /> */}
    </>
  );
}

export default App;
