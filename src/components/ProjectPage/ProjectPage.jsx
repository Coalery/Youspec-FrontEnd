import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import ProjectContent from './ProjectContent/ProjectContent';
import ProjectNav from './ProjectNav/ProjectNav';
import './ProjectPage.scss';
import { getProjectById } from '../../modules/project';
import { getAllTechStack } from '../../modules/tech_stack';

function ProjectPage() {
  const { id } = useParams();
  const { data, loading, error } = useSelector(
    (state) => state.project.projectById
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProjectById(id));
    dispatch(getAllTechStack());
  }, [dispatch, id]);

  if (!data || loading || error) return null;

  console.log(data);

  return (
    <div className="project-container">
      <ProjectNav />
      <ProjectContent />
    </div>
  );
}

export default ProjectPage;
