import { useDispatch, useSelector } from 'react-redux';
import Title from '../../Title/Title';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import './Philosophy.scss';
import Conditional from '../../Conditional/Conditional';
import {
  editPhilosophy,
  editPhilosopies,
} from '../../../modules/portfolio_edit';

function PhilosophyUnit({ data, isEditMode }) {
  const dispatch = useDispatch();

  const onChange = (e) => {
    dispatch(editPhilosophy({ ...data, [e.target.name]: e.target.value }));
  };

  return (
    <div className="philosophy-unit-container">
      <Conditional condition={isEditMode}>
        <p className="philosophy-unit-title">{data.title}</p>
        <p>
          <input
            name="title"
            className="philosophy-unit-title"
            onChange={onChange}
            value={data.title}
          />
        </p>
      </Conditional>
      <Conditional condition={isEditMode}>
        <p className="philosophy-unit-content">{data.content}</p>
        <textarea
          name="content"
          className="philosophy-unit-content"
          onChange={onChange}
          value={data.content}
        />
      </Conditional>
    </div>
  );
}

function AddPhilosophy({ ePhilosophies }) {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(
      editPhilosopies([
        ...ePhilosophies,
        { id: 'edit' + Math.random(), title: '', content: '' },
      ])
    );
  };

  return (
    <div className="portfolio-add-philosophy" onClick={onClick}>
      <AddCircleOutlineIcon
        style={{ color: 'rgba(0, 0, 0, 0.2)' }}
        fontSize="large"
      />
    </div>
  );
}

function Philosophy() {
  const philosophies = useSelector(
    (state) => state.portfolio.portfolio.data.philosophies
  );
  const ePhilosophies = useSelector(
    (state) => state.portfolioEdit.philosophies
  );
  const isEditMode = useSelector((state) => state.portfolioEdit.isEditMode);

  return (
    <div className="portfolio-inside-container">
      <Title icon="✨" text="저는 개발할 때 이런 생각을 해요." />
      <hr />
      <Conditional condition={isEditMode}>
        <div>
          {philosophies.map((data) => (
            <PhilosophyUnit
              key={`portfolio-philosophy-${data.id}`}
              data={data}
            />
          ))}
        </div>
        <div>
          {ePhilosophies.map((data, idx) => (
            <PhilosophyUnit
              key={`portfolio-philosophy-${data.id}`}
              data={data}
              isEditMode
            />
          ))}
          <AddPhilosophy ePhilosophies={ePhilosophies} />
        </div>
      </Conditional>
    </div>
  );
}

export default Philosophy;
