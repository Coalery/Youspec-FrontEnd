import { useParams } from 'react-router-dom';

import Profile from './Profile/Profile';

import './Portfolio.scss';
import Contact from './Contact/Contact';

function Portfolio() {
  const { customPortfolioName } = useParams();

  return (
    <div>
      <img
        src="http://newsimg.hankookilbo.com/2019/04/29/201904291390027161_3.jpg"
        alt="Profile Background"
        className="portfolio-profile-bg-image"
      />
      <div className="portfolio-container">
        <Profile />
        <Contact />
      </div>
    </div>
  );
}

export default Portfolio;
