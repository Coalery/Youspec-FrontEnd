import axios from 'axios';

export const getProjectById = async (id) => {
  const url = process.env.REACT_APP_BACKEND_URL;
  const response = await axios.get(`${url}/project/${id}`);
  if (response['data']['code'] === 200) return response['data']['data'];
  return null;
};

export const getFilteredProjects = async (filter = []) => {
  const url = process.env.REACT_APP_BACKEND_URL;
  if (filter.length === 0) filter = 'there-is-no-filter';
  else filter = filter.join(',');
  const response = await axios.get(`${url}/project/filter/${filter}`);
  if (response['data']['code'] === 200) return response['data']['data'];
  return null;
};

export const createProject = async (project) => {
  const url = process.env.REACT_APP_BACKEND_URL;
  project.techStacks = project.techStacks.filter(
    (techStack) => techStack.name !== '선택'
  );
  const response = await axios.post(`${url}/project`, project);
  if (response['data']['code'] === 200) return response['data']['data'];
  return null;
};

export const saveProject = async (project) => {
  const url = process.env.REACT_APP_BACKEND_URL;
  const response = await axios.put(`${url}/project`, project);
  if (response['data']['code'] === 200) return response['data']['data'];
  return null;
};

export const removeProject = async (projectId) => {
  const url = process.env.REACT_APP_BACKEND_URL;
  const response = await axios.delete(`${url}/project/${projectId}`);
  if (response['data']['code'] === 200) return response['data']['data'];
  return null;
};
