import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFilteredProjects } from '../../modules/project';
import ProjectItem from '../ProjectItem/ProjectItem';

function FilteredProject({ selectedChip }) {
  const { data, loading, error } = useSelector(
    (state) => state.project.filteredProjects
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFilteredProjects(selectedChip));
  }, [dispatch, selectedChip]);

  if (!data || loading || error) return null;
  return (
    <div className="project-items-container">
      {data.map((project) => (
        <ProjectItem
          key={`main-page-project-item-${project.id}`}
          item={project}
        />
      ))}
    </div>
  );
}

export default FilteredProject;
