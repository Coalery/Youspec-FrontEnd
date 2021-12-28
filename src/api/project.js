import axios from 'axios';

export const getProjectById = async (id) => {
  const url = process.env.REACT_APP_BACKEND_URL;
  const response = await axios.get(`${url}/project/${id}`);
  if (response['code'] === 200) return response['data'];
  return null;
};

export const getFilteredProjects = async (filter = []) => {
  const url = process.env.REACT_APP_BACKEND_URL;
  if (filter.length === 0) filter = 'there-is-no-filter';
  else filter = filter.join(',');
  return await axios.get(`${url}/project/filter/${filter}`);
};
