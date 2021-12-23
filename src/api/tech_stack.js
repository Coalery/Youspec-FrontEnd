import axios from 'axios';

async function sleep(t) {
  return new Promise((r) => setTimeout(r, t));
}

export const getAllTechStacks = async () => {
  await sleep(500);
  return [
    {
      id: 1,
      name: 'Nest.js',
      iconUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2560px-React-icon.svg.png',
    },
    {
      id: 2,
      name: 'React',
      iconUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2560px-React-icon.svg.png',
    },
    {
      id: 3,
      name: 'MySQL',
      iconUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2560px-React-icon.svg.png',
    },
    {
      id: 4,
      name: 'Firebase',
      iconUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2560px-React-icon.svg.png',
    },
  ];
};

// export const getAllTechStacks = async () => {
//   const url = process.env.REACT_APP_BACKEND_URL;
//   return await axios.get(`${url}/techstack`);
// };
