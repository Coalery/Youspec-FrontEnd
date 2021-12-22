import { useDispatch, useSelector } from 'react-redux';
import { endEdit, startEdit } from '../../../modules/portfolio_edit';
import Contact from './Contact/Contact';
import './Profile.scss';

function Profile({ user }) {
  const { data } = useSelector((state) => state.portfolio.portfolio);
  const { profileImage, username, description, contacts } = data;
  const { isEditMode } = useSelector((state) => state.portfolioEdit);
  const dispatch = useDispatch();

  const onClickEdit = () => {
    if (isEditMode) dispatch(endEdit());
    else dispatch(startEdit(data));
  };

  return (
    <div className="portfolio-profile-container">
      <img
        className="portfolio-profile-image"
        src={profileImage}
        alt="profile"
      />
      <div className="portfolio-profile-main">
        <div className="portfolio-profile-name">{username}</div>
        <div className="portfolio-profile-desc">{description}</div>
        <Contact contact={contacts} />
      </div>
      <button className="portfolio-edit-button" onClick={onClickEdit}>
        {isEditMode ? '완료' : '수정'}
      </button>
    </div>
  );
}

export default Profile;
