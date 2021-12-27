import {
  Button,
  Chip,
  Dialog,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
} from '@mui/material';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import './AddProjectDialog.scss';

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
              <img src={v.iconUrl} alt="icon" height="48" />
            </ListItemIcon>
            <ListItemText primary={v.name} />
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
}

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

  const handleClose = (stack) => {
    onClose(stack);
  };

  const onChange = (e) => {
    setProject((project) => ({ ...project, [e.target.name]: e.target.value }));
  };

  return (
    <Dialog onClose={handleClose} open={open} fullWidth maxWidth="sm">
      <div className="add-project-dialog-container">
        <p className="add-project-dialog-title">프로젝트 생성하기</p>
        <List>
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
            value={makers}
            onChange={onChange}
          />
          <p className="add-project-dialog-subtitle">사용할 기술 스택</p>
          <TechStackChips techStacks={techStacks} setProject={setProject} />
          <Button variant="contained" disableElevation fullWidth>
            생성하기
          </Button>
        </List>
      </div>
    </Dialog>
  );
}

export default AddProjectDialog;
