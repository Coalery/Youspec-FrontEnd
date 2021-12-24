import { useSelector, useDispatch } from 'react-redux';
import { editIntroduction } from '../../../../modules/project_edit';
import Conditional from '../../../Conditional/Conditional';
import Title from '../../../Title/Title';
import './ProjectIntroduction.scss';

function ProjectIntroduction() {
  const introduction = useSelector(
    (state) => state.project.projectById.data.introduction
  );
  const eIntroduction = useSelector((state) => state.projectEdit.introduction);
  const isEditMode = useSelector((state) => state.projectEdit.isEditMode);
  const dispatch = useDispatch();

  const onChange = (e) => {
    dispatch(editIntroduction(e.target.value));
  };

  return (
    <div id="project-introduction" className="project-content">
      <Title icon="📙" text="프로젝트 소개" />
      <hr />
      <Conditional condition={isEditMode}>
        <p className="project-introduction-content">{introduction}</p>
        <textarea
          className="project-introduction-content"
          value={eIntroduction}
          onChange={onChange}
        />
      </Conditional>
    </div>
  );
}

export default ProjectIntroduction;
