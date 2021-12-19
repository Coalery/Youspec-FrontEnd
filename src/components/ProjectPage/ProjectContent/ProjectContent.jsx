import DatabaseERD from './DatabaseERD/DatabaseERD';
import MainFeatures from './MainFeatures/MainFeatures';
import './ProjectContent.scss';
import ProjectIntroduction from './ProjectIntroduction/ProjectIntroduction';

function ProjectContent() {
  return (
    <div className="project-content-container">
      <ProjectIntroduction />
      <MainFeatures />
      <DatabaseERD />
    </div>
  );
}

export default ProjectContent;
