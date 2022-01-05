import axios from 'axios';

export const signUp = async (token) => {
  const url = process.env.REACT_APP_BACKEND_URL;
  const response = await axios.post(
    `${url}/user/signup`,
    {},
    { headers: { authorization: token } }
  );
  console.log(response['data']);
  if (response['data']['code'] < 400) return response['data']['data'];
  return null;
};
