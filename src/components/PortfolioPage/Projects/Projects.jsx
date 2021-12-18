import Title from '../../Title/Title';
import ProjectItem from '../../ProjectItem/ProjectItem';

import './Projects.scss';

function Projects(projects) {
  projects = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
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
