import { Button, Chip, Dialog, List, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { endEdit } from '../../../modules/portfolio_edit';
import { createProject } from '../../../modules/project';
import { cancelEdit } from '../../../modules/project_edit';
import TechStackSelectDialog from '../../TechStackSelectDialog/TechStackSelectDialog';

import './AddProjectDialog.scss';

function TechStackChips({ techStacks, setProject }) {
  const stacks = useSelector((state) => state.techStack.allTechStack.data);

  const [selected, setSelected] = useState(-1);
  const [open, setOpen] = useState(false);

  const onClickAdd = () => {
    setProject((project) => ({
      ...project,
      techStacks: [
        ...project.techStacks,
        { id: 'add' + Math.random(), name: '선택', iconUrl: '' },
      ],
    }));
  };

  const onClickEdit = (id) => {
    setSelected(id);
    setOpen(true);
  };

  const onStackEdit = (stack) => {
    setOpen(false);
    if (stack.clientX) return;
    setProject((project) => ({
      ...project,
      techStacks: [
        ...project.techStacks.filter(
          (v) => v.id !== selected && v.id !== stack.id
        ),
        stack,
      ],
    }));
  };

  return (
    <div className="tech-stack-chip-container">
      {techStacks.map((techStack) => (
        <Chip
          onClick={() => {
            onClickEdit(techStack.id);
          }}
          style={{ marginTop: '4px', marginRight: '4px' }}
          key={`tech-stack-chip-${techStack.id}`}
          label={techStack.name}
        />
      ))}
      <Chip
        onClick={onClickAdd}
        style={{ marginTop: '4px', marginRight: '4px' }}
        label="+"
      />
      <TechStackSelectDialog open={open} onClose={onStackEdit} data={stacks} />
    </div>
  );
}

function AddProjectDialog({ onClose, open }) {
  const dispatch = useDispatch();

  const [{ name, makers, techStacks, platformNames }, setProject] = useState({
    name: '',
    makers: '',
    techStacks: [],
    platformNames: '',
  });

  useEffect(() => {
    setProject({
      name: '',
      makers: '',
      techStacks: [],
      platformNames: '',
    });
  }, [open]);

  const handleClose = () => {
    onClose();
  };

  const onChange = (e) => {
    setProject((project) => ({ ...project, [e.target.name]: e.target.value }));
  };

  const onCreateButtonClick = () => {
    onClose();
    dispatch(cancelEdit());
    dispatch(endEdit());
    dispatch(createProject({ name, makers, techStacks, platformNames }));
  };

  return (
    <Dialog onClose={handleClose} open={open} fullWidth maxWidth="xs">
      <div className="add-project-dialog-container">
        <p className="add-project-dialog-title">프로젝트 생성하기</p>
        <List style={{ width: '100%' }}>
          <p className="add-project-dialog-subtitle">프로젝트 이름</p>
          <TextField
            name="name"
            fullWidth
            margin="dense"
            value={name}
            onChange={onChange}
          />
          <p className="add-project-dialog-subtitle">만든이</p>
          <TextField
            name="makers"
            fullWidth
            margin="dense"
            label="형식 : 홍길동,김길동,이길동..."
            value={makers}
            onChange={onChange}
          />
          <p className="add-project-dialog-subtitle">사용할 기술 스택</p>
          <TechStackChips techStacks={techStacks} setProject={setProject} />
          <p className="add-project-dialog-subtitle">사용할 기술 스택</p>
          <TextField
            name="platformNames"
            fullWidth
            margin="dense"
            label="형식 : 앱,백엔드,웹..."
            value={platformNames}
            onChange={onChange}
          />
          <Button
            variant="contained"
            disableElevation
            fullWidth
            onClick={onCreateButtonClick}
          >
            생성하기
          </Button>
        </List>
      </div>
    </Dialog>
  );
}

export default AddProjectDialog;
