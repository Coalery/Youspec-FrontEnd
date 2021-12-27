import { Link } from 'react-router-dom';

import AddIcon from '@mui/icons-material/Add';
import PersonIcon from '@mui/icons-material/Person';

import './Header.scss';
import AddProjectDialog from './AddProjectDialog/AddProjectDialog';
import { useState } from 'react';

function Header() {
  const [open, setOpen] = useState(false);

  const onClose = () => {
    setOpen(false);
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
              <AddIcon onClick={() => setOpen(true)} />
              <AddProjectDialog open={open} onClose={onClose} />
            </div>
            <Link className="header-icon-button" to="/portfolio/Coalery">
              <PersonIcon />
            </Link>
          </div>
        </div>
      </header>
      <div style={{ height: 50 }}></div>
    </>
  );
}

export default Header;
