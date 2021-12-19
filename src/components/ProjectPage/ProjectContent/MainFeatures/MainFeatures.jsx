import Title from '../../../Title/Title';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import './MainFeatures.scss';

function MainFeatures() {
  return (
    <div id="main-features">
      <Title icon="✨" text="주요 기능" />
      <Swiper
        modules={[Navigation]}
        slidesPerView={'auto'}
        spaceBetween={30}
        navigation
        pagination={{
          clickable: true,
        }}
      >
        {[
          'https://cdn.hkbs.co.kr/news/photo/202104/628798_374207_2710.png',
          'https://cdn.hkbs.co.kr/news/photo/202104/628798_374207_2710.png',
          'https://cdn.hkbs.co.kr/news/photo/202104/628798_374207_2710.png',
        ].map((imgUrl, idx) => (
          <SwiperSlide key={idx}>
            <img src={imgUrl} alt={`Slide${idx}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default MainFeatures;
