import axios from 'axios';

export const getAllTechStacks = async (token) => {
  const url = process.env.REACT_APP_BACKEND_URL;
  const response = await axios.get(`${url}/techstack`, {
    headers: { authorization: token },
  });
  if (response['data']['code'] < 400) return response['data']['data'];
  return null;
};
