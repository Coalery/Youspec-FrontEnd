import { useDispatch, useSelector } from 'react-redux';
import { editUser, endEdit, startEdit } from '../../../modules/portfolio_edit';
import EditIcon from '@mui/icons-material/Edit';
import Contact from './Contact/Contact';
import './Profile.scss';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';
import Conditional from '../../Conditional/Conditional';

const whiteTheme = createTheme({ palette: { primary: { main: '#ffffff' } } });

function Profile() {
  const { data } = useSelector((state) => state.portfolio.portfolio);
  const { name, profileUrl, description, contacts } = data.user;

  const eUser = useSelector((state) => state.portfolioEdit.user);
  const isEditMode = useSelector((state) => state.portfolioEdit.isEditMode);
  const dispatch = useDispatch();

  const onClickEdit = () => {
    if (isEditMode) dispatch(endEdit());
    else dispatch(startEdit(data));
  };

  const onChange = (e) => {
    dispatch(editUser({ ...eUser, [e.target.name]: e.target.value }));
  };

  return (
    <div className="portfolio-profile-container">
      <div>
        <img
          className="portfolio-profile-image"
          src={profileUrl}
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
          <>
            <div className="portfolio-profile-name">{name}</div>
            <div className="portfolio-profile-desc">{description}</div>
          </>
          <>
            <input
              name="name"
              className="portfolio-profile-name"
              onChange={onChange}
              value={eUser.name}
            />
            <textarea
              name="description"
              className="portfolio-profile-desc"
              onChange={onChange}
              value={eUser.description}
            />
          </>
        </Conditional>
        <Contact contact={contacts} />
      </div>
      <button className="portfolio-edit-button" onClick={onClickEdit}>
        {isEditMode ? '완료' : '수정'}
      </button>
    </div>
  );
}

export default Profile;
