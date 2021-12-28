import axios from 'axios';

async function sleep(t) {
  return new Promise((r) => setTimeout(r, t));
}

export const getPortfolio = async (pfName) => {
  await sleep(500);
  return {
    customName: 'coalery',
    backgroundImage:
      'http://newsimg.hankookilbo.com/2019/04/29/201904291390027161_3.jpg',
    user: {
      name: '김현우',
      profileUrl: 'https://avatars.githubusercontent.com/u/25046121?v=4',
      description:
        '안녕하세요! 네스트로 백엔드를 다루고, 플러터로 앱을 다루는 개발자 김현우입니다. 인터넷 속에서는 `러리`라는 닉네임을 사용합니다.',
      contacts: [
        {
          id: 1,
          url: '__Coalery',
          type: 'instagram',
        },
        {
          id: 2,
          url: 'Coalery',
          type: 'github',
        },
        {
          id: 3,
          url: 'doralife12@naver.com',
          type: 'email',
        },
      ],
    },
    philosophies: [
      {
        id: 1,
        title: 'Do what I want to do',
        content: `저는 프로그래밍을 할 때, 항상 해보고 싶은건 다 해보고 싶었습니다. 특히, 어릴 때 많은 걸 해봐야 추후 개발할 때에 도움이 된다고 생각했고, 청소년 때 여러 분야에 도전해보았습니다.
        그 경험 덕분에, 새로운 것을 배우면 빠르게 습득할 수 있습니다.
        최근 백엔드에 관심을 가지고 열심히 공부하고 있습니다.`,
      },
    ],
    techStacks: [
      {
        id: 1,
        description: '이 기술로 이거이거 해봤구요 저거저거 해봤어요',
        techStack: {
          id: 1,
          name: 'Nest.js',
          iconUrl:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2560px-React-icon.svg.png',
        },
      },
      {
        id: 2,
        description: '이 기술로 이거이거 해봤구요 저거저거 해봤어요',
        techStack: {
          id: 2,
          name: 'React',
          iconUrl:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2560px-React-icon.svg.png',
        },
      },
      {
        id: 3,
        description: '이 기술로 이거이거 해봤구요 저거저거 해봤어요',
        techStack: {
          id: 3,
          name: 'MySQL',
          iconUrl:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2560px-React-icon.svg.png',
        },
      },
      {
        id: 4,
        description: '이 기술로 이거이거 해봤구요 저거저거 해봤어요',
        techStack: {
          id: 4,
          name: 'Firebase',
          iconUrl:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2560px-React-icon.svg.png',
        },
      },
    ],
    projects: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
    activities: [
      {
        id: 1,
        title: '화명고등학교 프로그래밍 동아리 설립 및 부장',
        description: '21명의 동아리 부원에게 자바의 기본에 대해서 알려주었다.',
        startDate: new Date(2019, 3),
        endDate: new Date(2020, 2),
      },
      {
        id: 2,
        title: '카카오톡 오픈채팅방 관리자',
        description:
          '약 5,000명 규모의 소프트웨어 카카오톡 오픈채팅방들 관리하고 있다.',
        startDate: new Date(2019, 4),
        endDate: null,
      },
      {
        id: 3,
        title: '설리번 프로젝트 설리번',
        description:
          '디데이 앱을 만들어가는 과정을 통해 플러터에 대해 12명의 헬렌에게 알려주었다.',
        startDate: new Date(2021, 4, 3),
        endDate: new Date(2021, 8, 29),
      },
      {
        id: 4,
        title: '경희대학교 중앙 IT 동아리 쿠러그 운영진',
        description:
          '동아리 가입 처리, 경희대학교 소프트웨어 해커톤 khuthon 스태프',
        startDate: new Date(2021, 6),
        endDate: null,
      },
    ],
    academics: [
      {
        id: 1,
        name: '화명고등학교',
        description: '고등학교',
        startDate: new Date(2018, 3),
        endDate: new Date(2021, 2),
      },
      {
        id: 2,
        name: '경희대학교',
        description: '소프트웨어융합대학 컴퓨터공학과 (GPA 4.29 / 4.5)',
        startDate: new Date(2021, 3),
        endDate: null,
      },
    ],
  };
};

// export const getPortfolio = async (pfName) => {
//   const url = process.env.REACT_APP_BACKEND_URL;
//   return await axios.get(`${url}/portfolio/${pfName}`);
// };
