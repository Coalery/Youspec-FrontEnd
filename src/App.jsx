import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import MainPage from './components/MainPage/MainPage';
import Portfolio from './components/Portfolio/Portfolio';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/portfolio/:customPortfolioName" element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
