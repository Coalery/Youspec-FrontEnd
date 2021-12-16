import { Chip } from '@mui/material';
import './ProjectItem.scss';

function ProjectItem({ item }) {
  return (
    <div className="container">
      <img
        className="thumbnail-image"
        src="https://file.mk.co.kr/meet/neds/2021/06/image_readtop_2021_535745_16226846584668330.jpg"
        alt="cat"
      />
      <div className="contents">
        <p className="title">Title</p>
        <div className="maker">
          <p className="maker-name">만든 사람</p>
        </div>
        <Chip label="label" />
      </div>
    </div>
  );
}

export default ProjectItem;
