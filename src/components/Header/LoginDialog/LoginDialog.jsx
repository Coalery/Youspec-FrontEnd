import { Dialog } from '@mui/material';
import { useDispatch } from 'react-redux';
import { tryLogin } from '../../../modules/login';
import './LoginDialog.scss';

function LoginButton({ img, text, color, textColor, onClick }) {
  return (
    <button
      className="login-button"
      onClick={onClick}
      style={{ backgroundColor: color }}
    >
      <img src={img} alt="login-button-icon" />
      <p style={{ color: textColor }}>{text}</p>
    </button>
  );
}

function LoginDialog({ onClose, open }) {
  const dispatch = useDispatch();

  const handleClose = (result) => {
    onClose(result);
  };

  const onClick = (provider) => {
    dispatch(tryLogin(provider));
  };

  return (
    <Dialog onClose={handleClose} open={open} fullWidth maxWidth="xs">
      <div className="add-project-dialog-container">
        <p className="add-project-dialog-title">로그인</p>
        <LoginButton
          img="/img/google.png"
          text="구글로 로그인하기"
          color="white"
          textColor="black"
          onClick={() => onClick('google')}
        />
        <LoginButton
          img="/img/github.png"
          text="깃허브로 로그인하기"
          color="black"
          textColor="white"
          onClick={() => onClick('github')}
        />
      </div>
    </Dialog>
  );
}

export default LoginDialog;
