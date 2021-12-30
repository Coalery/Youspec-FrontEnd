import {
  Dialog,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import './TechStackSelectDialog.scss';

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

export default TechStackSelectDialog;
