import { Link } from 'react-router-dom';
import { useState } from 'react';

import AddIcon from '@mui/icons-material/Add';
import PersonIcon from '@mui/icons-material/Person';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import AddProjectDialog from './AddProjectDialog/AddProjectDialog';
import LoginDialog from './LoginDialog/LoginDialog';

import './Header.scss';
import { useDispatch, useSelector } from 'react-redux';
import Conditional from '../Conditional/Conditional';
import { tryLogout } from '../../modules/login';

function Header() {
  const data = useSelector((state) => state.login.login.data);
  const isLogin = data.token !== null;

  const dispatch = useDispatch();
  const [openAddProjectDialog, setOpenAddProjectDialog] = useState(false);
  const [openLoginDialog, setOpenLoginDialog] = useState(false);

  const onAddProjectDialogClose = () => {
    setOpenAddProjectDialog(false);
  };

  const onLoginDialogClose = () => {
    setOpenLoginDialog(false);
  };

  const onLogoutButtonClick = () => {
    dispatch(tryLogout());
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
              <Conditional condition={isLogin}>
                <LoginIcon onClick={() => setOpenLoginDialog(true)} />
                <LogoutIcon onClick={onLogoutButtonClick} />
              </Conditional>
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
