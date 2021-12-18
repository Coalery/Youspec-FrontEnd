import Title from '../Title/Title';
import './Philosophy.scss';

function PhilosophyUnit({ data }) {
  return (
    <div className="philosophy-unit-container">
      <p className="philosophy-unit-title">{data.title}</p>
      <p className="philosophy-unit-content">{data.content}</p>
    </div>
  );
}

function Philosophy({ philosophies }) {
  philosophies = [
    {
      id: 1,
      title: 'Do what I want to do',
      content: `저는 프로그래밍을 할 때, 항상 해보고 싶은건 다 해보고 싶었습니다. 특히, 어릴 때 많은 걸 해봐야 추후 개발할 때에 도움이 된다고 생각했고, 청소년 때 여러 분야에 도전해보았습니다.
      그 경험 덕분에, 새로운 것을 배우면 빠르게 습득할 수 있습니다.
      최근 백엔드에 관심을 가지고 열심히 공부하고 있습니다.`,
    },
  ];

  return (
    <div className="portfolio-inside-container">
      <Title icon="✨" text="저는 개발할 때 이런 생각을 해요." />
      <hr />
      {philosophies.map((data) => (
        <PhilosophyUnit key={`portfolio-philosophy-${data.id}`} data={data} />
      ))}
    </div>
  );
}

export default Philosophy;
