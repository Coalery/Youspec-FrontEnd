import { useDispatch, useSelector } from 'react-redux';
import Conditional from '../../Conditional/Conditional';
import dateFormat from '../../../lib/dateFormat';
import Title from '../../Title/Title';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { editActivity, editActivities } from '../../../modules/portfolio_edit';
import './Activities.scss';

function formatToInputDate(date) {
  if (!date) return '';
  if (typeof date === 'string') return date.split('T')[0];
  return date.toISOString().split('T')[0];
}

function ActivityUnit({ data, isEditMode }) {
  const dispatch = useDispatch();
  const { title, description, startDate, endDate } = data;

  const onChange = (e) => {
    let val = e.target.value;
    if (e.target.name === 'startDate' || e.target.name === 'endDate') {
      if (val !== '') val = new Date(e.target.value);
    }
    dispatch(editActivity({ ...data, [e.target.name]: val }));
  };

  return (
    <div className="activity-unit-container">
      <div className="activity-unit-point" />
      <Conditional condition={isEditMode}>
        <div className="activity-unit-content">
          <div className="activity-unit-date">
            {dateFormat(startDate)} ~ {dateFormat(endDate)}
          </div>
          <div className="activity-unit-title">{title}</div>
          <div className="activity-unit-desc">{description}</div>
        </div>
        <div className="activity-unit-content">
          <div className="activity-unit-date">
            <input
              name="startDate"
              type="date"
              value={formatToInputDate(startDate)}
              onChange={onChange}
            />{' '}
            ~{' '}
            <input
              name="endDate"
              type="date"
              value={formatToInputDate(endDate)}
              onChange={onChange}
            />
          </div>
          <div>
            <input
              className="activity-unit-title"
              name="title"
              value={title}
              onChange={onChange}
            />
          </div>
          <div>
            <textarea
              className="activity-unit-desc"
              name="description"
              value={description}
              onChange={onChange}
            />
          </div>
        </div>
      </Conditional>
    </div>
  );
}

function AddActivity({ eActivities }) {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(
      editActivities([
        ...eActivities,
        {
          id: 'edit' + Math.random(),
          title: '',
          description: '',
          startDate: new Date(Date.now()),
          endDate: null,
        },
      ])
    );
  };

  return (
    <div className="portfolio-add-activity" onClick={onClick}>
      <AddCircleOutlineIcon
        style={{ color: 'rgba(0, 0, 0, 0.2)' }}
        fontSize="large"
      />
    </div>
  );
}

function Activities() {
  const activities = useSelector(
    (state) => state.portfolio.portfolio.data.activities
  );
  const eActivities = useSelector((state) => state.portfolioEdit.activities);
  const isEditMode = useSelector((state) => state.portfolioEdit.isEditMode);

  return (
    <div className="portfolio-inside-container">
      <Title icon="🙌" text="참여한 활동" />
      <hr />
      <div className="portfolio-activities-container">
        <Conditional condition={isEditMode}>
          <>
            <div className="portfolio-activities-timeline" />
            <div className="portfolio-activities-content">
              {activities.map((activity) => (
                <ActivityUnit
                  key={`portfolio-activity-${activity.id}`}
                  data={activity}
                />
              ))}
            </div>
          </>
          <>
            <div className="portfolio-activities-timeline" />
            <div className="portfolio-activities-content">
              {eActivities.map((activity) => (
                <ActivityUnit
                  key={`portfolio-activity-${activity.id}`}
                  data={activity}
                  isEditMode
                />
              ))}
              <AddActivity eActivities={eActivities} />
            </div>
          </>
        </Conditional>
      </div>
    </div>
  );
}

export default Activities;
