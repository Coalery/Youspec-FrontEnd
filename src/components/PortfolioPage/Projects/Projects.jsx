import Title from '../../Title/Title';
import ProjectItem from '../../ProjectItem/ProjectItem';

import './Projects.scss';

function Projects({ projects }) {
  return (
    <div className="portfolio-inside-container">
      <Title icon="📚" text="참여 프로젝트" />
      <hr />
      <div className="portfolio-projects-container">
        {projects.map((project) => (
          <ProjectItem
            key={`portfolio-projects-${project.id}`}
            data={project}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
