import Title from '../../../Title/Title';
import './Troubleshootings.scss';

function TroubleshootingUnit({ data }) {
  return (
    <div className="troubleshoot-unit-container">
      <p className="troubleshoot-unit-title">
        [{data.platform}] {data.title}
      </p>
      <p className="troubleshoot-unit-desc">{data.description}</p>
    </div>
  );
}

function Troubleshootings({ troubleshootings }) {
  troubleshootings = [
    {
      id: 1,
      title: '토큰을 어디서 어떻게 관리할 것인가?',
      description:
        '거의 모든 요청의 헤더의 `Authorization`에 올바른 토큰을 넣어야 하므로 토큰을 전역에서 접근할 수 있어야 한다. 하지만 모든 로직은 컨트롤러 파일에서 만들어야 했고, 컨트롤러 파일은 모두 어떤 페이지에 의존적이다. 즉, 해당 페이지가 메모리에서 삭제되면 컨트롤러 또한 메모리에서 사라진다. 따라서 로그인 정보를 관리하는 컨트롤러 `AuthController`를 선언하였고, `permanent: true`를 인수로 넘겨서 앱이 꺼지기 전까지 계속 메모리에 상주하도록 하여 해결하였다.',
      platform: '앱',
    },
    {
      id: 2,
      title: '테이블 간 순환 참조 오류',
      description:
        '개발의 편의를 위해 `Party` 테이블 내에서 주최자의 정보와 참가자들의 정보를 분리하여 사용하였는데, 이렇게 될 경우 주최자의 `Participate`와 `Party` 테이블의 관계에 대한 정보는 `Party` 테이블에서 갖게 되고, 참가자들의 `Participate`와 `Party` 간 관계 정보는 `Participate`가 갖게 된다. 이때, 순환 참조가 발생하게 된다. 주최자의 정보를 `Participate`가 갖게 하여 `Party` 테이블에는 해당 정보가 없게 하고, 주최자 유저 아이디를 저장하는 열을 추가하여 해결하였다.',
      platform: '백엔드',
    },
  ];

  return (
    <div id="troubleshootings" className="project-content">
      <Title icon="🔨" text="트러블슈팅 경험" />
      <hr />
      <div className="troubleshootings-container">
        {troubleshootings.map((tShoot) => (
          <TroubleshootingUnit
            key={`troubleshootings-${tShoot.id}`}
            data={tShoot}
          />
        ))}
      </div>
    </div>
  );
}

export default Troubleshootings;
