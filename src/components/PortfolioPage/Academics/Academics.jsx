import dateFormat from '../../../lib/dateFormat';
import Title from '../../Title/Title';

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
  return (
    <div className="portfolio-inside-container">
      <Title icon="🎓" text="학력" />
      <hr />
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
