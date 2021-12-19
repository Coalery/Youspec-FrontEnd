import Title from '../../../Title/Title';
import './ApiSpec.scss';

function ApiSpecUnit({ data }) {
  return (
    <tr>
      <td>{data.title}</td>
      <td>{data.requestUrl}</td>
      <td align="center">{data.method}</td>
    </tr>
  );
}

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
          <td className="api-spec-table-head">Method</td>
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
          requestValues: [],
          requestExample: '',
          responseValues: [],
          responseExample: '',
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
    <div id="api-spec">
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
