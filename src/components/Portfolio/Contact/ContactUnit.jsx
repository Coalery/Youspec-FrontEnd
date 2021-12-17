import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { ReactComponent as KakaoIcon } from '../../../assets/kakao.svg';

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

function ContactUnit({ data }) {
  const CurrentIcon = icons[data.type];

  return (
    <a
      className="profile-contact-unit"
      href={`${urlPrefix[data.type]}${data.url}`}
    >
      <CurrentIcon />
      {data.url}
    </a>
  );
}

export default ContactUnit;
