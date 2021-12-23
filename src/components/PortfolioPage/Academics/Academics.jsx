import { useDispatch, useSelector } from 'react-redux';
import dateFormat from '../../../lib/dateFormat';
import { editAcademic, editAcademics } from '../../../modules/portfolio_edit';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Title from '../../Title/Title';

import './Academics.scss';
import Conditional from '../../Conditional/Conditional';

function formatToInputDate(date) {
  if (!date) return '';
  return date.toISOString().split('T')[0];
}

function AcademicUnit({ data, isEditMode }) {
  const dispatch = useDispatch();
  const { name, description, startDate, endDate } = data;

  const onChange = (e) => {
    let val = e.target.value;
    if (e.target.name === 'startDate' || e.target.name === 'endDate') {
      if (val !== '') val = new Date(e.target.value);
    }
    dispatch(editAcademic({ ...data, [e.target.name]: val }));
  };

  return (
    <Conditional condition={isEditMode}>
      <div className="academic-unit-container">
        <div className="academic-unit-name">{name}</div>
        <div>
          <p className="academic-unit-desc">{description}</p>
          <p className="academic-unit-date">
            {dateFormat(startDate)} ~ {dateFormat(endDate)}
          </p>
        </div>
      </div>
      <div className="academic-unit-container">
        <input
          name="name"
          className="academic-unit-name"
          value={name}
          onChange={onChange}
        />
        <div style={{ width: '100%' }}>
          <input
            name="description"
            className="academic-unit-desc"
            value={description}
            onChange={onChange}
          />
          <p className="academic-unit-date">
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
          </p>
        </div>
      </div>
    </Conditional>
  );
}

function AddAcademics({ eAcademics }) {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(
      editAcademics([
        ...eAcademics,
        {
          id: 'edit' + Math.random(),
          name: '',
          description: '',
          startDate: new Date(Date.now()),
          endDate: null,
        },
      ])
    );
  };

  return (
    <div className="portfolio-add-academics" onClick={onClick}>
      <AddCircleOutlineIcon
        style={{ color: 'rgba(0, 0, 0, 0.2)' }}
        fontSize="large"
      />
    </div>
  );
}

function Academics() {
  const academics = useSelector(
    (state) => state.portfolio.portfolio.data.academics
  );
  const eAcademics = useSelector((state) => state.portfolioEdit.academics);
  const isEditMode = useSelector((state) => state.portfolioEdit.isEditMode);

  return (
    <div className="portfolio-inside-container">
      <Title icon="🎓" text="학력" />
      <hr />
      <Conditional condition={isEditMode}>
        <div className="portfolio-academics-container">
          {academics.map((academic) => (
            <AcademicUnit
              key={`portfolio-academics-${academic.id}`}
              data={academic}
            />
          ))}
        </div>
        <div className="portfolio-academics-container">
          {eAcademics.map((academic) => (
            <AcademicUnit
              key={`portfolio-academics-${academic.id}`}
              data={academic}
              isEditMode
            />
          ))}
          <AddAcademics eAcademics={eAcademics} />
        </div>
      </Conditional>
    </div>
  );
}

export default Academics;
