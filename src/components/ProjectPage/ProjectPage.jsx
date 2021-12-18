import { useParams } from 'react-router-dom';
import ProjectContent from './ProjectContent/ProjectContent';
import ProjectNav from './ProjectNav/ProjectNav';
import './ProjectPage.scss';

function ProjectPage() {
  const { id } = useParams();

  return (
    <div className="project-container">
      <ProjectNav />
      <ProjectContent />
    </div>
  );
}

export default ProjectPage;
