import Title from '../../../Title/Title';
import ApiSpecUnit from './ApiSpecUnit/ApiSpecUnit';
import { useDispatch, useSelector } from 'react-redux';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Conditional from '../../../Conditional/Conditional';
import {
  editApiCategories,
  editApiCategory,
} from '../../../../modules/project_edit';

import './ApiSpec.scss';
import classNames from 'classnames';

function ApiSpecCategoryUnit({ data, isEditMode }) {
  const dispatch = useDispatch();

  const onChange = (e) => {
    dispatch(editApiCategory({ ...data, title: e.target.value }));
  };

  return (
    <table className="api-spec-table">
      <colgroup>
        <col span="1" width="30%" />
        <col span="1" />
        <col span="1" width="10%" />
      </colgroup>
      <tbody>
        <tr>
          <td
            className={classNames('api-spec-table-title', { edit: isEditMode })}
            colSpan="3"
            align="center"
          >
            <Conditional condition={isEditMode}>
              {data.title}
              <input
                className="api-spec-table-title"
                value={data.title}
                onChange={onChange}
              />
            </Conditional>
          </td>
        </tr>
        <tr>
          <td className="api-spec-table-head">Title</td>
          <td className="api-spec-table-head">URL</td>
          <td className="api-spec-table-head" align="center">
            Method
          </td>
        </tr>
        {data.apiUnits.map((apiUnit) => (
          <ApiSpecUnit
            key={`api-spec-unit-${apiUnit.id}`}
            parentId={data.id}
            data={apiUnit}
          />
        ))}
      </tbody>
    </table>
  );
}

function ApiSpec({ apiSpecCategories }) {
  const apiCategories = useSelector(
    (state) => state.project.projectById.data.apiCategories
  );
  const eApiCategories = useSelector(
    (state) => state.projectEdit.apiCategories
  );
  const isEditMode = useSelector((state) => state.projectEdit.isEditMode);
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(
      editApiCategories([
        ...eApiCategories,
        { id: 'edit' + Math.random(), title: '', apiUnits: [] },
      ])
    );
  };

  return (
    <div id="api-spec" className="project-content">
      <Title icon="📃" text="API 명세" />
      <hr />
      <Conditional condition={isEditMode}>
        <div>
          {apiCategories.map((apiSpecCategory) => (
            <ApiSpecCategoryUnit
              key={`api-spec-${apiSpecCategory.id}`}
              data={apiSpecCategory}
            />
          ))}
        </div>
        <div>
          {eApiCategories.map((apiSpecCategory) => (
            <ApiSpecCategoryUnit
              key={`api-spec-${apiSpecCategory.id}`}
              data={apiSpecCategory}
              isEditMode
            />
          ))}
          <div className="add-api-spec-category" onClick={onClick}>
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

export default ApiSpec;
