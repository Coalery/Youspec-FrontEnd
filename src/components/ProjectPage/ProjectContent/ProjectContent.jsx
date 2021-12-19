import MainFeatures from './MainFeatures/MainFeatures';
import './ProjectContent.scss';
import ProjectIntroduction from './ProjectIntroduction/ProjectIntroduction';

function ProjectContent() {
  return (
    <div className="project-content-container">
      <ProjectIntroduction />
      <MainFeatures />
    </div>
  );
}

export default ProjectContent;
