import './Title.scss';

function Title({ icon, text }) {
  return (
    <div className="title-container">
      <span className="title-icon">{icon}</span>
      <span className="title-text">{text}</span>
    </div>
  );
}

export default Title;
