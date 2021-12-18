import { useParams } from 'react-router-dom';

import './PortfolioPage.scss';

import Profile from './Profile/Profile';
import Philosophy from './Philosophy/Philosophy';
import UsingTechStack from './UsingTechStack/UsingTechStack';
import Projects from './Projects/Projects';
import Activities from './Activities/Activities';
import Academics from './Academics/Academics';

function PortfolioPage() {
  const { pfName } = useParams();

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
        <Academics />
      </div>
    </div>
  );
}

export default PortfolioPage;
