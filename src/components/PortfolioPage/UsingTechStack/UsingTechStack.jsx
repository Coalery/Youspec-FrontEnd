import { useDispatch, useSelector } from 'react-redux';
import { editTechStack, editTechStacks } from '../../../modules/portfolio_edit';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Title from '../../Title/Title';
import './UsingTechStack.scss';
import Conditional from '../../Conditional/Conditional';
import { useState } from 'react';
import TechStackSelectDialog from '../../TechStackSelectDialog/TechStackSelectDialog';

function UsingTechStackUnit({ data, isEditMode }) {
  const stacks = useSelector((state) => state.techStack.allTechStack.data);
  const { description, techStack } = data;
  const { id, name, iconUrl } = techStack;

  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);

  const onChange = (e) => {
    dispatch(editTechStack({ ...data, description: e.target.value }));
  };

  const onClickOpen = () => {
    setOpen(true);
  };

  const onChangeIcon = (stack) => {
    setOpen(false);
    if (stack.clientX) return;
    dispatch(editTechStack({ ...data, techStack: stack }));
  };

  return (
    <Conditional condition={isEditMode}>
      <div>
        <p className="portfolio-usingtechstack-info">
          <img
            className="portfolio-usingtechstack-icon"
            src={iconUrl}
            alt="tech-icon"
          />
          <span className="portfolio-usingtechstack-name">{name}</span>
        </p>
        <p className="portfolio-usingtechstack-desc">{description}</p>
      </div>
      <div>
        <div
          className="portfolio-usingtechstack-editmode"
          onClick={onClickOpen}
        >
          <Conditional condition={id === -1}>
            <p className="portfolio-usingtechstack-info">
              <img
                className="portfolio-usingtechstack-icon"
                src={iconUrl}
                alt="tech-icon"
              />
              <span className="portfolio-usingtechstack-name">{name}</span>
            </p>
            <p className="portfolio-usingtechstack-info">
              <span className="portfolio-usingtechstack-name">
                선택해주세요.
              </span>
            </p>
          </Conditional>
        </div>
        <TechStackSelectDialog
          open={open}
          onClose={onChangeIcon}
          data={stacks}
        />
        <textarea
          className="portfolio-usingtechstack-desc"
          onChange={onChange}
          value={description}
        />
      </div>
    </Conditional>
  );
}

function AddTechStack({ eTechStacks }) {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(
      editTechStacks([
        ...eTechStacks,
        {
          id: 'edit' + Math.random(),
          description: '',
          techStack: { id: -1, name: '', iconUrl: '' },
        },
      ])
    );
  };

  return (
    <div className="portfolio-add-tech-stack" onClick={onClick}>
      <AddCircleOutlineIcon
        style={{ color: 'rgba(0, 0, 0, 0.2)' }}
        fontSize="large"
      />
    </div>
  );
}

function UsingTechStack() {
  const techStacks = useSelector(
    (state) => state.portfolio.portfolio.data.portfolioTechStacks
  );
  const eTechStacks = useSelector(
    (state) => state.portfolioEdit.portfolioTechStacks
  );
  const isEditMode = useSelector((state) => state.portfolioEdit.isEditMode);

  return (
    <div className="portfolio-inside-container">
      <Title icon="✏️" text="기술 스택" />
      <hr />
      <Conditional condition={isEditMode}>
        <div className="portfolio-usingtechstack-container">
          {techStacks.map((stack) => (
            <UsingTechStackUnit
              key={`portfolio-usingtechstack-${stack.id}`}
              data={stack}
            />
          ))}
        </div>
        <div className="portfolio-usingtechstack-container">
          {eTechStacks.map((stack) => (
            <UsingTechStackUnit
              key={`portfolio-usingtechstack-${stack.id}`}
              data={stack}
              isEditMode
            />
          ))}
          <AddTechStack eTechStacks={eTechStacks} />
        </div>
      </Conditional>
    </div>
  );
}

export default UsingTechStack;
