import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import MainPage from './components/MainPage/MainPage';
import PortfolioPage from './components/PortfolioPage/PortfolioPage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route
          path="/portfolio/:customPortfolioName"
          element={<PortfolioPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
