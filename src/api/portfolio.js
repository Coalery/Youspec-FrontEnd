import axios from 'axios';

export const getPortfolio = async (pfName) => {
  const url = process.env.REACT_APP_BACKEND_URL;
  const response = await axios.get(`${url}/portfolio/${pfName}`);
  if (response['code'] === 200) return response['data'];
  return null;
};
