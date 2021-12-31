import axios from 'axios';

export const getAllTechStacks = async (token) => {
  const url = process.env.REACT_APP_BACKEND_URL;
  const response = await axios.get(`${url}/techstack`);
  if (response['data']['code'] === 200) return response['data']['data'];
  return null;
};
