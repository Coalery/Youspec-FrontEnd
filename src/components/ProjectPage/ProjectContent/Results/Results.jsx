import { useDispatch, useSelector } from 'react-redux';
import Conditional from '../../../Conditional/Conditional';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Title from '../../../Title/Title';
import './Results.scss';
import { editResults } from '../../../../modules/project_edit';

function Results() {
  const results = useSelector(
    (state) => state.project.projectById.data.results
  );
  const eResults = useSelector((state) => state.projectEdit.results);
  const isEditMode = useSelector((state) => state.projectEdit.isEditMode);
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(editResults([...eResults, '']));
  };

  const onChange = (e, idx) => {
    const copy = [...eResults];
    copy[idx] = e.target.value;
    dispatch(editResults(copy));
  };

  return (
    <div id="results" className="project-content">
      <Title icon="📕" text="결과" />
      <hr />
      <Conditional condition={isEditMode}>
        <div className="results-container">
          {results.map((result, idx) => (
            <p key={`results-${idx}`}>{result}</p>
          ))}
        </div>
        <div className="results-container">
          {eResults.map((result, idx) => (
            <input
              className="results-edit"
              key={`results-${idx}`}
              onChange={(e) => onChange(e, idx)}
              value={result}
            />
          ))}
          <div className="project-add-feature-strings" onClick={onClick}>
            <AddCircleOutlineIcon
              style={{ color: 'rgba(0, 0, 0, 0.2)' }}
              fontSize="large"
            />
          </div>
        </div>
      </Conditional>
    </div>
  );
}

export default Results;
