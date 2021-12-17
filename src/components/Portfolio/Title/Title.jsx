import './Title.scss';

function Title({ icon, text }) {
  return (
    <div>
      <span className="portfolio-title-icon">{icon}</span>
      <span className="portfolio-title-text">{text}</span>
    </div>
  );
}

export default Title;
