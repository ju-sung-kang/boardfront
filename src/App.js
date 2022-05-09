import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/main';
import Detail from './pages/detail';
import Write from './pages/write';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/post/:id" element={<Detail />} />
        <Route path="/write" element={<Write />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
