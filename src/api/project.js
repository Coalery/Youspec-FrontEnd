import axios from 'axios';

async function sleep(t) {
  return new Promise((r) => setTimeout(r, t));
}

export const getProjectById = async (id) => {
  await sleep(500);
  return {
    name: '같이 먹을래?',
    startDate: new Date(2021, 10, 14),
    endDate: new Date(2021, 12, 7),
    description: '',
    coverImageUrl:
      'https://file.mk.co.kr/meet/neds/2021/06/image_readtop_2021_535745_16226846584668330.jpg',
    featureImageUrls: [
      'https://cdn.hkbs.co.kr/news/photo/202104/628798_374207_2710.png',
      'https://cdn.hkbs.co.kr/news/photo/202104/628798_374207_2710.png',
      'https://cdn.hkbs.co.kr/news/photo/202104/628798_374207_2710.png',
    ],
    featureStrings: [
      '같이 먹을래? (주최자) : 조회, 생성, 수정, 삭제, 주위 500m 내 조회',
      '같이 먹자! (참가자) : 참가, 참가 취소, 성공 동의, 메세지 보내기',
      '결제 : 앱 내에서 같은 가치의 화폐로 사용할 수 있는 포인트를 충전하기',
    ],
    dbERDUrl:
      'https://media.vlpt.us/images/ash3767/post/282c7b17-97bc-4488-8774-120cf278e9ed/image.png',
    results: [
      '처음으로 특정 디자인 패턴을 사용하여 플러터 앱을 구현하였습니다.',
      '처음으로 Nestjs를 활용한 프로젝트를 완성해보았습니다.',
      'Nestjs와 Typeorm에 대한 이해도가 높아졌습니다.',
      '기능에 따라 브랜치를 만들어서 PR을 만든 뒤 머지하는 방법으로 개발을 진행하였습니다.',
      '파이어베이스의 Auth, Cloud messaging에 대한 이해도가 높아졌습니다.',
    ],
    techStacks: [
      {
        id: 1,
        name: 'Nest.js',
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
      {
        id: 5,
        name: 'Flutter',
        iconUrl:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2560px-React-icon.svg.png',
      },
    ],
    makers: [
      {
        id: 1,
        user: {
          id: 1,
          name: '김현우',
          profileUrl: 'https://img.hankyung.com/photo/202109/01.27511773.1.jpg',
          description: '',
        },
        contributions: ['모든 기능을 만들었습니다.'],
      },
    ],
    platforms: [
      {
        id: 1,
        name: '앱',
        relatedUrl: 'https://github.com/Coalery/EatTogether-App',
        troubleshootings: [
          {
            id: 1,
            title: '토큰을 어디서 어떻게 관리할 것인가?',
            contents:
              '거의 모든 요청의 헤더의 `Authorization`에 올바른 토큰을 넣어야 하므로 토큰을 전역에서 접근할 수 있어야 한다. 하지만 모든 로직은 컨트롤러 파일에서 만들어야 했고, 컨트롤러 파일은 모두 어떤 페이지에 의존적이다. 즉, 해당 페이지가 메모리에서 삭제되면 컨트롤러 또한 메모리에서 사라진다. 따라서 로그인 정보를 관리하는 컨트롤러 `AuthController`를 선언하였고, `permanent: true`를 인수로 넘겨서 앱이 꺼지기 전까지 계속 메모리에 상주하도록 하여 해결하였다.',
          },
        ],
      },
      {
        id: 2,
        name: '백엔드',
        relatedUrl: 'https://github.com/Coalery/EatTogether-BackEnd',
        troubleshootings: [
          {
            id: 2,
            title: '테이블 간 순환 참조 오류',
            contents:
              '개발의 편의를 위해 `Party` 테이블 내에서 주최자의 정보와 참가자들의 정보를 분리하여 사용하였는데, 이렇게 될 경우 주최자의 `Participate`와 `Party` 테이블의 관계에 대한 정보는 `Party` 테이블에서 갖게 되고, 참가자들의 `Participate`와 `Party` 간 관계 정보는 `Participate`가 갖게 된다. 이때, 순환 참조가 발생하게 된다. 주최자의 정보를 `Participate`가 갖게 하여 `Party` 테이블에는 해당 정보가 없게 하고, 주최자 유저 아이디를 저장하는 열을 추가하여 해결하였다.',
          },
        ],
      },
    ],
    apiCategories: [
      {
        id: 1,
        title: '같이 먹을래?',
        apiUnits: [
          {
            id: 1,
            title: '주변 "같이 먹을래?" 찾기',
            description: null,
            method: 'GET',
            requestUrl: '/party?latitude=<lat>&longitude=<long>',
            requestValues: [
              {
                id: 1,
                name: 'latitude',
                dataType: 'double',
                requestType: 'Query',
                description: '기준 좌표의 위도 값',
                condition: '최소 -90.0, 최대 90.0',
              },
              {
                id: 2,
                name: 'longitude',
                dataType: 'double',
                requestType: 'Query',
                description: '기준 좌표의 경도 값',
                condition: '최소 -180.0, 최대 180.0',
              },
            ],
            requestExample: '/party?latitude=3.141592&longitude=12.345',
            responseValues: [
              {
                id: 1,
                name: 'id',
                dataType: 'int',
                description: '"같이 먹을래?"의 아이디',
              },
              {
                id: 2,
                name: 'title',
                dataType: 'string',
                description: '"같이 먹을래?"의 제목',
              },
              {
                id: 3,
                name: 'description',
                dataType: 'string?',
                description: '"같이 먹을래?"의 설명',
              },
            ],
            responseExample: `{
              "code": 200,
              "data": [
                {
                  "id": 1,
                  "title": "치킨 먹을 사람?",
                  "description": null,
                  "restuarant": "OO동 교촌치킨",
                  "meetLatitude": "3.2349820000",
                  "meetLongitude": "1.0180860000",
                  "goalPrice": 20000,
                  "state": "participating",
                  "createdAt": "2021-11-25T05:43:59.000Z",
                  "removedAt": null,
                  "usedFirstMessage": true,
                  "usedSecondMessage": true,
                  "otherMessageUsedDate": "2021-12-02T16:19:04.000Z",
                  "hostId": "2",
                  "participate": [
                    {
                      "id": 1,
                      "isSuccessAgree": false,
                      "menu": "교촌허니콤보",
                      "amount": 3000,
                      "participant": {
                        "id": "2",
                        "name": "지나가는사람",
                        "description": null,
                        "profileURL": null,
                        "point": 10000,
                        "fcmToken": "abc"
                      }
                    },
                    {
                      "id": 2,
                      "isSuccessAgree": false,
                      "menu": "교촌허니콤보",
                      "amount": 4000,
                      "participant": {
                        "id": "3",
                        "name": "밥먹자",
                        "description": null,
                        "profileURL": "Some-Profile-URL",
                        "point": 4000,
                        "fcmToken": "abc"
                      }
                    },
                    {
                      "id": 3,
                      "isSuccessAgree": false,
                      "menu": "교촌허니콤보",
                      "amount": 7000,
                      "participant": {
                        "id": "Some-ID",
                        "name": "러리",
                        "description": null,
                        "profileURL": null,
                        "point": 26000,
                        "fcmToken": "abc"
                      }
                    }
                  ]
                },
                {
                  "id": 5,
                  "title": "뜨끈한 국밥 먹을 사람?",
                  "description": "그럴 바에야 뜨끈한 국밥 한그릇 먹지",
                  "restuarant": "하나은행 근처 OO국밥",
                  "meetLatitude": "3.2349084727",
                  "meetLongitude": "1       .0198440479",
                  "goalPrice": 8000,
                  "state": "gather-complete",
                  "createdAt": "2021-12-07T05:15:00.000Z",
                  "removedAt": null,
                  "usedFirstMessage": false,
                  "usedSecondMessage": false,
                  "otherMessageUsedDate": null,
                  "hostId": "7",
                  "participate": [
                    {
                      "id": 5,
                      "isSuccessAgree": false,
                      "menu": "돼지국밥",
                      "amount": 0,
                      "participant": {
                        "id": "7",
                        "name": "뜨끈한국밥",
                        "description": null,
                        "profileURL": "Some-Profile-URL",
                        "point": 3640,
                        "fcmToken": "abc"
                      }
                    },
                    {
                      "id": 6,
                      "isSuccessAgree": true,
                      "menu": "순대국밥",
                      "amount": 4000,
                      "participant": {
                        "id": "4",
                        "name": "홍길동",
                        "description": null,
                        "profileURL": null,
                        "point": 50000,
                        "fcmToken": "abc"
                      }
                    },
                    {
                      "id": 7,
                      "isSuccessAgree": false,
                      "menu": "돼지국밥",
                      "amount": 3000,
                      "participant": {
                        "id": "5",
                        "name": "Coalery",
                        "description": null,
                        "profileURL": null,
                        "point": 5000,
                        "fcmToken": "abc"
                      }
                    },
                    {
                      "id": 8,
                      "isSuccessAgree": true,
                      "menu": "돼지국밥",
                      "amount": 3000,
                      "participant": {
                        "id": "6",
                        "name": "배고팡",
                        "description": null,
                        "profileURL": null,
                        "point": 7430,
                        "fcmToken": "abc"
                      }
                    }
                  ]
                },
                {
                  "id": 6,
                  "title": "피자 안 먹고 싶니",
                  "description": "Hello",
                  "restuarant": "롯데마트 쪽 오르막길에 있는 피자에땅",
                  "meetLatitude": "3.2348237361",
                  "meetLongitude": "1.0195726360",
                  "goalPrice": 16000,
                  "state": "participating",
                  "createdAt": "2021-12-06T20:27:17.857Z",
                  "removedAt": null,
                  "usedFirstMessage": false,
                  "usedSecondMessage": false,
                  "otherMessageUsedDate": null,
                  "hostId": "Some-ID",
                  "participate": [
                    {
                      "id": 9,
                      "isSuccessAgree": false,
                      "menu": "어떤피자",
                      "amount": 0,
                      "participant": {
                        "id": "Some-ID",
                        "name": "러리",
                        "description": null,
                        "profileURL": null,
                        "point": 26000,
                        "fcmToken": "abc"
                      }
                    }
                  ]
                }
              ]
            }`,
          },
        ],
      },
      {
        id: 2,
        title: '같이 먹자!',
        apiUnits: [
          {
            id: 1,
            title: '"같이 먹을래?"에 참가',
            description: null,
            method: 'POST',
            requestUrl: '/participate/:partyId',
            requestValues: [],
            requestExample: '',
            responseValues: [],
            responseExample: '',
          },
        ],
      },
      {
        id: 3,
        title: '결제',
        apiUnits: [
          {
            id: 1,
            title: '결제 요청',
            description: null,
            method: 'POST',
            requestUrl: '/purchase/request',
            requestValues: [],
            requestExample: '',
            responseValues: [],
            responseExample: '',
          },
        ],
      },
      {
        id: 4,
        title: '유저',
        apiUnits: [
          {
            id: 1,
            title: '유저 자신의 정보 조회',
            description: null,
            method: 'GET',
            requestUrl: '/user',
            requestValues: [],
            requestExample: '',
            responseValues: [],
            responseExample: '',
          },
        ],
      },
    ],
  };
};

export const getFilteredProjects = async (filter = []) => {
  const url = process.env.REACT_APP_BACKEND_URL;
  if (filter.length === 0) filter = 'there-is-no-filter';
  else filter = filter.join(',');
  return await axios.get(`${url}/project/${filter}`);
};
