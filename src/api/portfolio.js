import axios from 'axios';

export const getPortfolio = async (pfName) => {
  const url = process.env.REACT_APP_BACKEND_URL;
  const response = await axios.get(`${url}/portfolio/${pfName}`);
  if (response['data']['code'] === 200) return response['data']['data'];
  return null;
};

export const savePortfolio = async (portfolio) => {
  const url = process.env.REACT_APP_BACKEND_URL;
  const response = await axios.put(`${url}/portfolio`, portfolio);
  if (response['data']['code'] === 200) return response['data']['data'];
  return null;
};
