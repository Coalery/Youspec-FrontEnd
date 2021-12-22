import dateFormat from '../../../lib/dateFormat';
import Title from '../../Title/Title';
import './Activities.scss';

function ActivityUnit({ data }) {
  const { title, description, startDate, endDate } = data;

  return (
    <div className="activity-unit-container">
      <div className="activity-unit-point" />
      <div className="activity-unit-content">
        <div className="activity-unit-date">
          {dateFormat(startDate)} ~ {dateFormat(endDate)}
        </div>
        <div className="activity-unit-title">{title}</div>
        <div className="activity-unit-desc">{description}</div>
      </div>
    </div>
  );
}

function Activities({ activities }) {
  return (
    <div className="portfolio-inside-container">
      <Title icon="🙌" text="참여한 활동" />
      <hr />
      <div className="portfolio-activities-container">
        <div className="portfolio-activities-timeline" />
        <div className="portfolio-activities-content">
          {activities.map((activity) => (
            <ActivityUnit
              key={`portfolio-activity-${activity.id}`}
              data={activity}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Activities;
