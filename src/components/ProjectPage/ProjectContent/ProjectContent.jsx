import DatabaseERD from './DatabaseERD/DatabaseERD';
import MainFeatures from './MainFeatures/MainFeatures';
import './ProjectContent.scss';
import ProjectIntroduction from './ProjectIntroduction/ProjectIntroduction';
import Troubleshootings from './Troubleshootings/Troubleshootings';

function ProjectContent() {
  return (
    <div className="project-content-container">
      <ProjectIntroduction />
      <MainFeatures />
      <DatabaseERD />
      <Troubleshootings />
    </div>
  );
}

export default ProjectContent;
