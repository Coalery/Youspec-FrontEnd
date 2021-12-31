import { Chip } from '@mui/material';
import DefaultImage from '../DefaultImage/DefaultImage';
import './ProjectItem.scss';

function ProjectItem({ item }) {
  return (
    <a className="project-item-link" href={`/project/${item.id}`}>
      <div className="project-item-container">
        <DefaultImage
          className="project-item-thumbnail-image"
          src={item.coverImageUrl}
          alt="Project Item Thubmnail"
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
    </a>
  );
}

export default ProjectItem;
