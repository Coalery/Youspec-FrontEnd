import axios from 'axios';

export const getAllTechStacks = async () => {
  const url = process.env.REACT_APP_BACKEND_URL;
  return await axios.get(`${url}/techstack`);
};
