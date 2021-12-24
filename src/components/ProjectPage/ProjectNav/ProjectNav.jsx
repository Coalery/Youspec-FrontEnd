import { Chip } from '@mui/material';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import Conditional from '../../Conditional/Conditional';
import dateFormat from '../../../lib/dateFormat';
import { endEdit, startEdit } from '../../../modules/project_edit';
import './ProjectNav.scss';

function MakerUnit({ data }) {
  return (
    <div className="project-maker-unit-container">
      <img
        className="project-maker-unit-profile"
        src="https://img.hankyung.com/photo/202109/01.27511773.1.jpg"
        alt="project-maker-unit-profile"
      />
      <p>러리</p>
    </div>
  );
}

function CoverImage({ isEditMode }) {
  const coverImageUrl = useSelector(
    (state) => state.project.projectById.data.coverImageUrl
  );
  const eCoverImageUrl = useSelector(
    (state) => state.projectEdit.coverImageUrl
  );

  return (
    <Conditional condition={isEditMode}>
      <img className="project-nav-image" src={coverImageUrl} alt="Cover" />
      <img className="project-nav-image" src={eCoverImageUrl} alt="Cover" />
    </Conditional>
  );
}

function Name({ isEditMode }) {
  const name = useSelector((state) => state.project.projectById.data.name);
  const eName = useSelector((state) => state.projectEdit.name);

  return (
    <Conditional condition={isEditMode}>
      <p className="project-nav-title">{name}</p>
      <p className="project-nav-title">{eName}</p>
    </Conditional>
  );
}

function TechStackChips({ isEditMode }) {
  const techStacks = useSelector(
    (state) => state.project.projectById.data.techStacks
  );
  const eTechStacks = useSelector((state) => state.projectEdit.techStacks);

  return (
    <Conditional condition={isEditMode}>
      <div className="project-tech-stack-chip-container">
        {techStacks.map((techStack) => (
          <Chip
            className="project-tech-stack-chip"
            key={`tech-stack-chip-${techStack.id}`}
            label={techStack.name}
          />
        ))}
      </div>
      <div className="project-tech-stack-chip-container">
        {eTechStacks.map((techStack) => (
          <Chip
            className="project-tech-stack-chip"
            key={`tech-stack-chip-${techStack.id}`}
            label={techStack.name}
          />
        ))}
      </div>
    </Conditional>
  );
}

function Makers({ isEditMode }) {
  const makers = useSelector((state) => state.project.projectById.data.makers);
  const eMakers = useSelector((state) => state.projectEdit.makers);

  return (
    <Conditional condition={isEditMode}>
      <div>
        {makers.map((maker) => (
          <MakerUnit key={`project-nav-${maker.id}`} data={maker} />
        ))}
      </div>
      <div>
        {eMakers.map((maker) => (
          <MakerUnit key={`project-nav-${maker.id}`} data={maker} />
        ))}
      </div>
    </Conditional>
  );
}

function DateRange({ isEditMode }) {
  const { startDate, endDate } = useSelector(
    (state) => ({
      startDate: state.project.projectById.data.startDate,
      endDate: state.project.projectById.data.endDate,
    }),
    shallowEqual
  );
  const { eStartDate, eEndDate } = useSelector(
    (state) => ({
      eStartDate: state.projectEdit.startDate,
      eEndDate: state.projectEdit.endDate,
    }),
    shallowEqual
  );

  return (
    <Conditional condition={isEditMode}>
      <p>
        {dateFormat(startDate)} ~ {dateFormat(endDate)}
      </p>
      <p>
        {dateFormat(eStartDate)} ~ {dateFormat(eEndDate)}
      </p>
    </Conditional>
  );
}

function RelatedLinks({ isEditMode }) {
  const platforms = useSelector(
    (state) => state.project.projectById.data.platforms
  );
  const ePlatforms = useSelector((state) => state.projectEdit.platforms);

  return (
    <Conditional condition={isEditMode}>
      <div className="project-nav-related-links">
        {platforms.map((platform) => (
          <span key={`related-links-${platform.id}`}>
            <a className="project-nav-link" href={platform.relatedUrl}>
              {platform.name}
            </a>{' '}
          </span>
        ))}
      </div>
      <div className="project-nav-related-links">
        {ePlatforms.map((platform) => (
          <span key={`related-links-${platform.id}`}>
            <a className="project-nav-link" href={platform.relatedUrl}>
              {platform.name}
            </a>{' '}
          </span>
        ))}
      </div>
    </Conditional>
  );
}

function Index() {
  return (
    <div className="project-nav-index">
      <p>
        <a className="project-nav-link" href="#project-introduction">
          📙 프로젝트 소개
        </a>
      </p>
      <p>
        <a className="project-nav-link" href="#main-features">
          ✨ 주요 기능
        </a>
      </p>
      <p>
        <a className="project-nav-link" href="#db-erd">
          🗂️ 데이터베이스 ERD
        </a>
      </p>
      <p>
        <a className="project-nav-link" href="#api-spec">
          📃 API 명세
        </a>
      </p>
      <p>
        <a className="project-nav-link" href="#troubleshootings">
          🔨 트러블슈팅 경험
        </a>
      </p>
      <p>
        <a className="project-nav-link" href="#results">
          📕 결과
        </a>
      </p>
    </div>
  );
}

function ProjectNav({ project }) {
  const { data } = useSelector((state) => state.project.projectById);
  const { isEditMode } = useSelector((state) => state.projectEdit);

  const dispatch = useDispatch();

  const onClickEdit = () => {
    if (isEditMode) dispatch(endEdit());
    else dispatch(startEdit(data));
  };

  const onClickRemove = () => {};

  return (
    <div className="project-nav-container">
      <CoverImage isEditMode={isEditMode} />
      <div className="project-nav-content">
        <Name isEditMode={isEditMode} />
        <TechStackChips isEditMode={isEditMode} />
        <p className="project-nav-subtitle">만든이</p>
        <Makers isEditMode={isEditMode} />
        <p className="project-nav-subtitle">만든 기간</p>
        <DateRange isEditMode={isEditMode} />
        <p className="project-nav-subtitle">관련 링크</p>
        <RelatedLinks isEditMode={isEditMode} />
        <p className="project-nav-subtitle">목차</p>
        <Index />
        <>
          <p className="project-nav-subtitle">메뉴</p>
          <button className="project-edit-button" onClick={onClickEdit}>
            {isEditMode ? '완료' : '수정'}
          </button>
          <button className="project-remove-button" onClick={onClickRemove}>
            삭제
          </button>
        </>
      </div>
    </div>
  );
}

export default ProjectNav;
