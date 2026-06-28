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
    fetch('/data/blog.json')
      .then((res) => res.json())
      .then((result) => {
        setPosts(result);
        setLoaded(true);
      });
  }, []);

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
