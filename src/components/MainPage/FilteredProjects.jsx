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
    console.log(selectedChip);
    dispatch(getFilteredProjects(selectedChip));
  }, [dispatch, selectedChip]);

  if (!data || loading || error) return null;
  return (
    <div>
      {[1, 2, 3].map((project) => (
        <ProjectItem item={project} />
      ))}
    </div>
  );
}

export default FilteredProject;
