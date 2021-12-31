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
import DefaultImage from '../DefaultImage/DefaultImage';

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
      <DefaultImage
        src={data.backgroundImage}
        alt="Profile Background"
        className="portfolio-profile-bg-image"
        long
      />
      <div className="portfolio-container">
        <Profile />
        <Philosophy />
        <UsingTechStack />
        <Projects projects={data.projects} />
        <Activities />
        <Academics academics={data.academics} />
      </div>
    </div>
  );
}

export default PortfolioPage;
