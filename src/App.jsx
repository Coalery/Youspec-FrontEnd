import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import MainPage from './components/MainPage/MainPage';
import PortfolioPage from './components/PortfolioPage/PortfolioPage';
import ProjectPage from './components/ProjectPage/ProjectPage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/portfolio/:pfName" element={<PortfolioPage />} />
        <Route path="/project/:id" element={<ProjectPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
