import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import { AppRoute } from './const';
import Layout from './pages/Layout';
import UploadPage from './pages/UploadPage';
import VideoPage from './pages/VideoPage';
import './styles/style.scss';


function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path={AppRoute.HOME} element={<Layout/>}>
          <Route path={AppRoute.HOME} element={<HomePage />} />
          <Route path={AppRoute.VIDEO} element={<VideoPage />} />
          <Route path={AppRoute.UPLOAD} element={<UploadPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
