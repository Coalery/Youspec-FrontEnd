import Title from '../../../Title/Title';
import './Results.scss';

function Results({ results }) {
  results = [
    '처음으로 특정 디자인 패턴을 사용하여 플러터 앱을 구현하였습니다.',
    '처음으로 Nestjs를 활용한 프로젝트를 완성해보았습니다.',
    'Nestjs와 Typeorm에 대한 이해도가 높아졌습니다.',
    '기능에 따라 브랜치를 만들어서 PR을 만든 뒤 머지하는 방법으로 개발을 진행하였습니다.',
    '파이어베이스의 Auth, Cloud messaging에 대한 이해도가 높아졌습니다.',
  ];

  return (
    <div id="results">
      <Title icon="📕" text="결과" />
      <div className="results-container">
        <ol>
          {results.map((result, idx) => (
            <li key={`results-${idx}`}>{result}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default Results;
