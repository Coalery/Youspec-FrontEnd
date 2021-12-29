import {
  Chip,
  Dialog,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import Conditional from '../../Conditional/Conditional';
import dateFormat from '../../../lib/dateFormat';
import {
  cancelEdit,
  editEndDate,
  editName,
  editPlatforms,
  editStartDate,
  editTechStacks,
  startEdit,
} from '../../../modules/project_edit';
import './ProjectNav.scss';
import { useState } from 'react';
import { saveProject } from '../../../modules/project';

function formatToInputDate(date) {
  if (!date) return '';
  if (typeof date === 'string') return date.split('T')[0];
  const timezoneOffset = new Date().getTimezoneOffset() * 60000;
  return new Date(date.getTime() - timezoneOffset).toISOString().split('T')[0];
}

function MakerUnit({ data }) {
  const { user } = data;

  return (
    <div className="project-maker-unit-container">
      <img
        className="project-maker-unit-profile"
        src={user.profileUrl}
        alt="project-maker-unit-profile"
      />
      <p>{user.name}</p>
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

function Name() {
  const name = useSelector((state) => state.project.projectById.data.name);
  const eName = useSelector((state) => state.projectEdit.name);
  const isEditMode = useSelector((state) => state.projectEdit.isEditMode);
  const dispatch = useDispatch();

  const onChange = (e) => {
    dispatch(editName(e.target.value));
  };

  return (
    <Conditional condition={isEditMode}>
      <p className="project-nav-title">{name}</p>
      <input value={eName} onChange={onChange} className="project-nav-title" />
    </Conditional>
  );
}

function TechStackSelectDialog({ onClose, open, data }) {
  const handleClose = (stack) => {
    onClose(stack);
  };

  return (
    <Dialog onClose={handleClose} open={open} fullWidth maxWidth="md">
      <List>
        {data.map((v) => (
          <ListItem
            key={`tech-stack-select-dialog-${v.id}`}
            disablePadding
            onClick={() => handleClose(v)}
          >
            <ListItemIcon>
              <img
                className="tech-stack-select-dialog-icon"
                src={v.iconUrl}
                alt="icon"
              />
            </ListItemIcon>
            <ListItemText primary={v.name} />
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
}

function TechStackChips() {
  const techStacks = useSelector(
    (state) => state.project.projectById.data.projectTechStacks
  );
  const eTechStacks = useSelector(
    (state) => state.projectEdit.projectTechStacks
  );
  const stacks = useSelector((state) => state.techStack.allTechStack.data);
  const isEditMode = useSelector((state) => state.projectEdit.isEditMode);
  const dispatch = useDispatch();

  const [selected, setSelected] = useState({});
  const [open, setOpen] = useState(false);

  const onClickAdd = () => {
    dispatch(
      editTechStacks([
        ...eTechStacks,
        {
          id: 'edit' + Math.random(),
          techStack: { id: 'edit' + Math.random(), name: '선택', iconUrl: '' },
        },
      ])
    );
  };

  const onClickEdit = (stack) => {
    setSelected(stack);
    setOpen(true);
  };

  const onStackEdit = (stack) => {
    setOpen(false);
    if (stack.clientX) return;
    dispatch(
      editTechStacks([
        ...eTechStacks.filter(
          (v) => v.id !== selected.id && v.techStack.id !== stack.id
        ),
        { ...selected, techStack: stack },
      ])
    );
  };

  return (
    <Conditional condition={isEditMode}>
      <div className="project-tech-stack-chip-container">
        {techStacks.map((techStack) => (
          <Chip
            style={{ marginTop: '4px', marginRight: '4px' }}
            key={`tech-stack-chip-${techStack.id}`}
            label={techStack.techStack.name}
          />
        ))}
      </div>
      <div className="project-tech-stack-chip-container">
        {eTechStacks.map((techStack) => (
          <Chip
            onClick={() => {
              onClickEdit(techStack);
            }}
            style={{ marginTop: '4px', marginRight: '4px' }}
            key={`tech-stack-chip-${techStack.id}`}
            label={techStack.techStack.name}
          />
        ))}
        <Chip
          onClick={onClickAdd}
          style={{ marginTop: '4px', marginRight: '4px' }}
          label="+"
        />
        <TechStackSelectDialog
          open={open}
          onClose={onStackEdit}
          data={stacks}
        />
      </div>
    </Conditional>
  );
}

function Makers() {
  const makers = useSelector(
    (state) => state.project.projectById.data.projectUsers
  );
  const eMakers = useSelector((state) => state.projectEdit.projectUsers);
  const isEditMode = useSelector((state) => state.projectEdit.isEditMode);

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

function DateRange() {
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
  const isEditMode = useSelector((state) => state.projectEdit.isEditMode);
  const dispatch = useDispatch();

  const onChange = (e) => {
    if (e.target.value === '') return;
    const val = new Date(e.target.value);
    if (e.target.name === 'startDate') dispatch(editStartDate(val));
    if (e.target.name === 'endDate') dispatch(editEndDate(val));
  };

  return (
    <Conditional condition={isEditMode}>
      <p>
        {dateFormat(startDate)} ~ {dateFormat(endDate)}
      </p>
      <p>
        <input
          name="startDate"
          type="date"
          value={formatToInputDate(eStartDate)}
          onChange={onChange}
        />{' '}
        ~{' '}
        <input
          name="endDate"
          type="date"
          value={formatToInputDate(eEndDate)}
          onChange={onChange}
        />
      </p>
    </Conditional>
  );
}

function RelatedLinks() {
  const platforms = useSelector(
    (state) => state.project.projectById.data.platforms
  );
  const ePlatforms = useSelector((state) => state.projectEdit.platforms);
  const isEditMode = useSelector((state) => state.projectEdit.isEditMode);
  const dispatch = useDispatch();

  const onChange = (e, platform) => {
    dispatch(
      editPlatforms([
        ...ePlatforms.filter((v) => v.id !== platform.id),
        {
          ...platform,
          relatedUrl: e.target.value,
        },
      ])
    );
  };

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
          <div key={`related-links-${platform.id}`}>
            <p className="project-nav-related-links-edit-title">
              {platform.name}와(과) 연괸된 URL
            </p>
            <input
              onChange={(e) => onChange(e, platform)}
              value={platform.relatedUrl}
            />
          </div>
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

function ButtonMenu() {
  const { data } = useSelector((state) => state.project.projectById);
  const eData = useSelector((state) => state.projectEdit);
  const { isEditMode } = eData;
  const dispatch = useDispatch();

  const onClickEdit = () => {
    if (isEditMode) dispatch(saveProject(eData));
    else dispatch(startEdit(data));
  };

  const onClickRemove = () => {
    if (isEditMode) dispatch(cancelEdit());
    else dispatch();
  };

  return (
    <>
      <p className="project-nav-subtitle">메뉴</p>
      <button className="project-edit-button" onClick={onClickEdit}>
        {isEditMode ? '완료' : '수정'}
      </button>
      <button className="project-remove-button" onClick={onClickRemove}>
        {isEditMode ? '취소' : '삭제'}
      </button>
    </>
  );
}

function ProjectNav() {
  return (
    <div className="project-nav-container">
      <CoverImage />
      <div className="project-nav-content">
        <Name />
        <TechStackChips />
        <p className="project-nav-subtitle">만든이</p>
        <Makers />
        <p className="project-nav-subtitle">만든 기간</p>
        <DateRange />
        <p className="project-nav-subtitle">관련 링크</p>
        <RelatedLinks />
        <p className="project-nav-subtitle">목차</p>
        <Index />
        {true && <ButtonMenu />}
      </div>
    </div>
  );
}

export default ProjectNav;
