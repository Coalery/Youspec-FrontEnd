import Title from '../../../Title/Title';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import './MainFeatures.scss';

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

function FeatureStrings({ features }) {
  return (
    <div className="mainfeatures-strings-container">
      <ul>
        {features.map((feature, idx) => (
          <li key={`feature-strings-${idx}`}>{feature}</li>
        ))}
      </ul>
    </div>
  );
}

function MainFeatures() {
  const featureImages = [
    'https://cdn.hkbs.co.kr/news/photo/202104/628798_374207_2710.png',
    'https://cdn.hkbs.co.kr/news/photo/202104/628798_374207_2710.png',
    'https://cdn.hkbs.co.kr/news/photo/202104/628798_374207_2710.png',
  ];

  const featureStrings = [
    '같이 먹을래? (주최자) : 조회, 생성, 수정, 삭제, 주위 500m 내 조회',
    '같이 먹자! (참가자) : 참가, 참가 취소, 성공 동의, 메세지 보내기',
    '결제 : 앱 내에서 같은 가치의 화폐로 사용할 수 있는 포인트를 충전하기',
  ];

  return (
    <div id="main-features" className="project-content">
      <Title icon="✨" text="주요 기능" />
      <hr />
      <FeatureImages features={featureImages} />
      <FeatureStrings features={featureStrings} />
    </div>
  );
}

export default MainFeatures;
