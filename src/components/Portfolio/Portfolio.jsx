import { useParams } from 'react-router-dom';

import './Portfolio.scss';

import Profile from './Profile/Profile';
import Philosophy from './Philosophy/Philosophy';
import UsingTechStack from './UsingTechStack/UsingTechStack';
import Projects from './Projects/Projects';
import Activities from './Activities/Activities';

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
        <Philosophy />
        <UsingTechStack />
        <Projects />
        <Activities />
      </div>
    </div>
  );
}

export default Portfolio;
