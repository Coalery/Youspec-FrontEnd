import { useDispatch, useSelector } from 'react-redux';
import {
  editDescription,
  editUserName,
  endEdit,
  startEdit,
} from '../../../modules/portfolio_edit';
import EditIcon from '@mui/icons-material/Edit';
import Contact from './Contact/Contact';
import './Profile.scss';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';
import Conditional from '../../Conditional/Conditional';

const whiteTheme = createTheme({ palette: { primary: { main: '#ffffff' } } });

function Profile() {
  const { data } = useSelector((state) => state.portfolio.portfolio);
  const { isEditMode, username, description } = useSelector(
    (state) => state.portfolioEdit
  );
  const dispatch = useDispatch();

  const onClickEdit = () => {
    if (isEditMode) dispatch(endEdit());
    else dispatch(startEdit(data));
  };

  const onEditName = (e) => {
    console.log(e.target.value);
    dispatch(editUserName(e.target.value));
  };

  const onEditDescription = (e) => {
    console.log(e.target.value);
    dispatch(editDescription(e.target.value));
  };

  return (
    <div className="portfolio-profile-container">
      <div>
        <img
          className="portfolio-profile-image"
          src={data.profileImage}
          alt="profile"
        />
        {isEditMode && (
          <div className="portfolio-edit-profile-image">
            <ThemeProvider theme={whiteTheme}>
              <EditIcon
                className="edit-icon"
                color="primary"
                fontSize="large"
              />
            </ThemeProvider>
          </div>
        )}
      </div>
      <div className="portfolio-profile-main">
        <Conditional condition={isEditMode}>
          <div className="portfolio-profile-name">{data.username}</div>
          <input
            className="portfolio-profile-name"
            onChange={onEditName}
            value={username}
          />
        </Conditional>
        <Conditional condition={isEditMode}>
          <div className="portfolio-profile-desc">{data.description}</div>
          <textarea
            className="portfolio-profile-desc"
            onChange={onEditDescription}
            value={description}
          />
        </Conditional>
        <Contact contact={data.contacts} />
      </div>
      <button className="portfolio-edit-button" onClick={onClickEdit}>
        {isEditMode ? '완료' : '수정'}
      </button>
    </div>
  );
}

export default Profile;
