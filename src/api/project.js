import axios from 'axios';

export const getFilteredProjects = async (filter = []) => {
  const url = process.env.REACT_APP_BACKEND_URL;
  if (filter.length === 0) filter = 'there-is-no-filter';
  else filter = filter.join(',');
  console.log(filter);
  return await axios.get(`${url}/project/${filter}`);
};
