import { Link } from 'react-router-dom';

import SearchIcon from '@mui/icons-material/Search';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
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
              <EmojiEventsIcon />
            </div>
            <div className="header-icon-button">
              <SearchIcon />
            </div>
            <div className="header-icon-button">
              <PersonIcon />
            </div>
          </div>
        </div>
      </header>
      <div style={{ height: 50 }}></div>
    </>
  );
}

export default Header;
