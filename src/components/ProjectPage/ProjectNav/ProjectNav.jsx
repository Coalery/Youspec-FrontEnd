import { Chip } from '@mui/material';
import dateFormat from '../../../lib/dateFormat';
import './ProjectNav.scss';

function MakerUnit({ data }) {
  return (
    <div className="project-maker-unit-container">
      <img
        className="project-maker-unit-profile"
        src="https://img.hankyung.com/photo/202109/01.27511773.1.jpg"
        alt="project-maker-unit-profile"
      />
      <p>러리</p>
    </div>
  );
}

function ProjectNav({ project }) {
  return (
    <div className="project-nav-container">
      <img
        className="project-nav-image"
        src="https://file.mk.co.kr/meet/neds/2021/06/image_readtop_2021_535745_16226846584668330.jpg"
        alt="cat"
      />
      <div className="project-nav-content">
        <p className="project-nav-title">Title</p>
        <p className="project-nav-desc">description</p>
        <Chip label="label" />
        <p className="project-nav-subtitle">만든이</p>
        <div>
          {[{ id: 1 }, { id: 2 }, { id: 3 }].map((maker) => (
            <MakerUnit key={`project-nav-${maker.id}`} data={maker} />
          ))}
        </div>
        <p className="project-nav-subtitle">만든 기간</p>
        <p>
          {dateFormat(new Date(2021, 12, 15))} ~{' '}
          {dateFormat(new Date(2021, 12, 19))}
        </p>
        <p className="project-nav-subtitle">목차</p>
        <div className="project-nav-index">
          <p>📙 프로젝트 소개</p>
          <p>✨ 주요 기능</p>
          <p>🔗 링크</p>
          <p>🗂️ 데이터베이스 ERD</p>
          <p>📃 API 명세</p>
          <p>🔨 트러블슈팅</p>
          <p>📕 결과</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectNav;
