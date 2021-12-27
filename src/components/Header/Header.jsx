import { Link } from 'react-router-dom';
import { useState } from 'react';

import AddIcon from '@mui/icons-material/Add';
import PersonIcon from '@mui/icons-material/Person';
import LoginIcon from '@mui/icons-material/Login';
import AddProjectDialog from './AddProjectDialog/AddProjectDialog';
import LoginDialog from './LoginDialog/LoginDialog';

import './Header.scss';

function Header() {
  const [openAddProjectDialog, setOpenAddProjectDialog] = useState(false);
  const [openLoginDialog, setOpenLoginDialog] = useState(false);

  const onAddProjectDialogClose = () => {
    setOpenAddProjectDialog(false);
  };

  const onLoginDialogClose = () => {
    setOpenLoginDialog(false);
  };

  return (
    <>
      <header className="header">
        <div className="header-container">
          <div className="header-left">
            <Link to={'/'}>
              <img className="logo" src="/logo.png" alt="logo"></img>
            </Link>
          </div>
          <div className="header-right">
            <div className="header-icon-button">
              <AddIcon onClick={() => setOpenAddProjectDialog(true)} />
              <AddProjectDialog
                open={openAddProjectDialog}
                onClose={onAddProjectDialogClose}
              />
            </div>
            <Link className="header-icon-button" to="/portfolio/Coalery">
              <PersonIcon />
            </Link>
            <div className="header-icon-button">
              <LoginIcon onClick={() => setOpenLoginDialog(true)} />
              <LoginDialog
                open={openLoginDialog}
                onClose={onLoginDialogClose}
              />
            </div>
          </div>
        </div>
      </header>
      <div style={{ height: 50 }}></div>
    </>
  );
}

export default Header;
