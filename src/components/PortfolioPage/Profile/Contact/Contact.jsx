import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { ReactComponent as KakaoIcon } from '../../../../assets/kakao.svg';

import './Contact.scss';

const icons = {
  instagram: InstagramIcon,
  facebook: FacebookIcon,
  github: GitHubIcon,
  email: MailOutlineIcon,
  kakao: KakaoIcon,
};

const urlPrefix = {
  instagram: 'https://instagram.com/',
  facebook: 'https://facebook.com/',
  github: 'https://github.com/',
  email: 'mailto://',
  kakao: 'https://open.kakao.com/me/',
};

function Contact({ contact }) {
  return (
    <div className="portfolio-profile-contact">
      {contact.map((data) => {
        const CurrentIcon = icons[data.type];
        return (
          <a
            key={`portfolio-profile-contact-${data.id}`}
            className="profile-contact-unit"
            href={`${urlPrefix[data.type]}${data.url}`}
          >
            <CurrentIcon />
          </a>
        );
      })}
    </div>
  );
}

export default Contact;
