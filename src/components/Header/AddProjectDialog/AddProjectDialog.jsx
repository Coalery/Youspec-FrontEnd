import { Button, Chip, Dialog, List, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
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
  const [{ name, makers, techStacks }, setProject] = useState({
    name: '',
    makers: '',
    techStacks: [],
  });

  useEffect(() => {
    setProject({
      name: '',
      makers: '',
      techStacks: [],
    });
  }, [open]);

  const handleClose = (stack) => {
    onClose(stack);
  };

  const onChange = (e) => {
    setProject((project) => ({ ...project, [e.target.name]: e.target.value }));
  };

  const onCreateButtonClick = () => {};

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
