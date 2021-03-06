import axios from 'axios';

export const getPortfolio = async (token, pfName) => {
  const url = process.env.REACT_APP_BACKEND_URL;
  const response = await axios.get(`${url}/portfolio/${pfName}`, {
    headers: { authorization: token },
  });
  if (response['data']['code'] < 400) return response['data']['data'];
  return null;
};

export const savePortfolio = async (token, portfolio) => {
  const url = process.env.REACT_APP_BACKEND_URL;
  const response = await axios.put(
    `${url}/portfolio/${portfolio.customName}`,
    portfolio,
    {
      headers: { authorization: token },
    }
  );
  if (response['data']['code'] < 400) return response['data']['data'];
  return null;
};
