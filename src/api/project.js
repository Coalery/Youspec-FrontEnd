import axios from 'axios';

export const getProjectById = async (token, id) => {
  const url = process.env.REACT_APP_BACKEND_URL;
  const response = await axios.get(`${url}/project/${id}`, {
    headers: { authorization: token },
  });
  if (response['data']['code'] < 400) return response['data']['data'];
  return null;
};

export const getFilteredProjects = async (token, filter = []) => {
  const url = process.env.REACT_APP_BACKEND_URL;
  if (filter.length === 0) filter = 'no-filter';
  else filter = filter.join(',');
  const response = await axios.get(`${url}/project/filter/${filter}`, {
    headers: { authorization: token },
  });
  if (response['data']['code'] < 400) return response['data']['data'];
  return null;
};

export const createProject = async (token, project) => {
  const url = process.env.REACT_APP_BACKEND_URL;
  project.techStacks = project.techStacks.filter(
    (techStack) => techStack.name !== '선택'
  );
  const response = await axios.post(`${url}/project`, project, {
    headers: { authorization: token },
  });
  if (response['data']['code'] < 400) return response['data']['data'];
  return null;
};

export const saveProject = async (token, project) => {
  const url = process.env.REACT_APP_BACKEND_URL;
  const response = await axios.put(`${url}/project/${project.id}`, project, {
    headers: { authorization: token },
  });
  if (response['data']['code'] < 400) return response['data']['data'];
  return null;
};

export const removeProject = async (token, projectId) => {
  const url = process.env.REACT_APP_BACKEND_URL;
  const response = await axios.delete(`${url}/project/${projectId}`, {
    headers: { authorization: token },
  });
  if (response['data']['code'] < 400) return response['data']['data'];
  return null;
};
