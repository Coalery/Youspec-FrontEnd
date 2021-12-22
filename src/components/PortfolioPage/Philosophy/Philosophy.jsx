import Title from '../../Title/Title';
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
