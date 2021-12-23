import { useParams } from 'react-router-dom';

import './PortfolioPage.scss';

import Profile from './Profile/Profile';
import Philosophy from './Philosophy/Philosophy';
import UsingTechStack from './UsingTechStack/UsingTechStack';
import Projects from './Projects/Projects';
import Activities from './Activities/Activities';
import Academics from './Academics/Academics';
import { useDispatch, useSelector } from 'react-redux';
import { getPortfolio } from '../../modules/portfolio';
import { useEffect } from 'react';
import { getAllTechStack } from '../../modules/tech_stack';

function PortfolioPage() {
  const { pfName } = useParams();
  const { data, loading, error } = useSelector(
    (state) => state.portfolio.portfolio
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPortfolio(pfName));
    dispatch(getAllTechStack()); // TODO For test (Must remove)
  }, [dispatch, pfName]);

  if (!data || loading || error) return null;

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
        <UsingTechStack stacks={data.techStacks} />
        <Projects projects={data.projects} />
        <Activities activities={data.activities} />
        <Academics academics={data.academics} />
      </div>
    </div>
  );
}

export default PortfolioPage;
