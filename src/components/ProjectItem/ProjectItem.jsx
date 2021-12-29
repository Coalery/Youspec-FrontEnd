import { Chip } from '@mui/material';
import './ProjectItem.scss';

function ProjectItem({ item }) {
  return (
    <div className="project-item-container">
      <img
        className="project-item-thumbnail-image"
        src="https://file.mk.co.kr/meet/neds/2021/06/image_readtop_2021_535745_16226846584668330.jpg"
        alt="cat"
      />
      <div className="project-item-contents">
        <p className="project-item-title">{item.name}</p>
        {item.projectTechStacks.map((stack) => (
          <Chip
            className="project-item-chip"
            key={`project-item-${stack.id}`}
            label={stack.techStack.name}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectItem;
