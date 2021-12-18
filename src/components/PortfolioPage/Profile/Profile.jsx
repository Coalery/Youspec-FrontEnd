import Contact from './Contact/Contact';
import './Profile.scss';

function Profile({ user }) {
  return (
    <div className="portfolio-profile-container">
      <img
        className="portfolio-profile-image"
        src="https://avatars.githubusercontent.com/u/25046121?v=4"
        alt="profile"
      />
      <div className="portfolio-profile-main">
        <div className="portfolio-profile-name">김현우</div>
        <div className="portfolio-profile-desc">
          안녕하세요! 네스트로 백엔드를 다루고, 플러터로 앱을 다루는 개발자
          김현우입니다. 인터넷 속에서는 `러리`라는 닉네임을 사용합니다.
        </div>
        <Contact />
      </div>
    </div>
  );
}

export default Profile;
