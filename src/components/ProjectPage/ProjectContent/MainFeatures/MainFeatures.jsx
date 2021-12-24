import Title from '../../../Title/Title';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

import 'swiper/css';
import 'swiper/css/navigation';
import './MainFeatures.scss';
import { useDispatch, useSelector } from 'react-redux';
import Conditional from '../../../Conditional/Conditional';
import { editFeatureStrings } from '../../../../modules/project_edit';

function FeatureImages({ features }) {
  return (
    <Swiper
      modules={[Navigation]}
      slidesPerView={'auto'}
      spaceBetween={30}
      navigation
      pagination={{
        clickable: true,
      }}
    >
      {features.map((imgUrl, idx) => (
        <SwiperSlide key={`feature-images-${idx}`}>
          <img src={imgUrl} alt={`Slide${idx}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

function FeatureStrings() {
  const featureStrings = useSelector(
    (state) => state.project.projectById.data.featureStrings
  );
  const eFeatureStrings = useSelector(
    (state) => state.projectEdit.featureStrings
  );
  const isEditMode = useSelector((state) => state.projectEdit.isEditMode);
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(editFeatureStrings([...eFeatureStrings, '']));
  };

  const onChange = (e, idx) => {
    const copy = [...eFeatureStrings];
    copy[idx] = e.target.value;
    dispatch(editFeatureStrings(copy));
  };

  return (
    <Conditional condition={isEditMode}>
      <div className="mainfeatures-strings-container">
        {featureStrings.map((feature, idx) => (
          <p
            className="mainfeatures-strings-edit"
            key={`feature-strings-${idx}`}
          >
            {feature}
          </p>
        ))}
      </div>
      <div className="mainfeatures-strings-container">
        {eFeatureStrings.map((feature, idx) => (
          <input
            className="mainfeatures-strings-edit"
            key={`feature-strings-${idx}`}
            value={feature}
            onChange={(e) => onChange(e, idx)}
          />
        ))}
        <div className="project-add-feature-strings" onClick={onClick}>
          <AddCircleOutlineIcon
            style={{ color: 'rgba(0, 0, 0, 0.2)' }}
            fontSize="large"
          />
        </div>
      </div>
    </Conditional>
  );
}

function MainFeatures() {
  const featureImages = [
    'https://cdn.hkbs.co.kr/news/photo/202104/628798_374207_2710.png',
    'https://cdn.hkbs.co.kr/news/photo/202104/628798_374207_2710.png',
    'https://cdn.hkbs.co.kr/news/photo/202104/628798_374207_2710.png',
  ];

  return (
    <div id="main-features" className="project-content">
      <Title icon="✨" text="주요 기능" />
      <hr />
      <FeatureImages features={featureImages} />
      <FeatureStrings />
    </div>
  );
}

export default MainFeatures;
