import dateFormat from '../../../lib/dateFormat';
import Title from '../Title/Title';

import './Academics.scss';

function AcademicUnit({ data }) {
  const { name, description, startDate, endDate } = data;

  return (
    <div className="academic-unit-container">
      <div className="academic-unit-name">{name}</div>
      <div>
        <p className="academic-unit-desc">{description}</p>
        <p className="academic-unit-date">
          {dateFormat(startDate)} ~ {dateFormat(endDate)}
        </p>
      </div>
    </div>
  );
}

function Academics({ academics }) {
  academics = [
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
  ];

  return (
    <div className="portfolio-inside-container">
      <Title icon="🎓" text="학력" />
      <div className="portfolio-academics-container">
        {academics.map((academic) => (
          <AcademicUnit
            key={`portfolio-academics-${academic.id}`}
            data={academic}
          />
        ))}
      </div>
    </div>
  );
}

export default Academics;
