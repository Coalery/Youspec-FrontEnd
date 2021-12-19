import { Link } from 'react-router-dom';

import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';

import './Header.scss';

function Header() {
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
              <SearchIcon />
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
