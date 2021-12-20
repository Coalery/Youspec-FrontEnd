import Title from '../../../Title/Title';
import ApiSpecUnit from './ApiSpecUnit/ApiSpecUnit';

import './ApiSpec.scss';

function ApiSpecCategoryUnit({ data }) {
  return (
    <table className="api-spec-table">
      <colgroup>
        <col span="1" width="30%" />
        <col span="1" />
        <col span="1" width="10%" />
      </colgroup>
      <tbody>
        <tr>
          <td className="api-spec-table-title" colSpan="3" align="center">
            {data.title}
          </td>
        </tr>
        <tr>
          <td className="api-spec-table-head">Title</td>
          <td className="api-spec-table-head">URL</td>
          <td className="api-spec-table-head" align="center">
            Method
          </td>
        </tr>
        {data.apiUnits.map((apiUnit) => (
          <ApiSpecUnit key={`api-spec-unit-${apiUnit.id}`} data={apiUnit} />
        ))}
      </tbody>
    </table>
  );
}

function ApiSpec({ apiSpecCategories }) {
  apiSpecCategories = [
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
  ];

  return (
    <div id="api-spec" className="project-content">
      <Title icon="📃" text="API 명세" />
      <hr />
      {apiSpecCategories.map((apiSpecCategory) => (
        <ApiSpecCategoryUnit
          key={`api-spec-${apiSpecCategory.id}`}
          data={apiSpecCategory}
        />
      ))}
    </div>
  );
}

export default ApiSpec;
