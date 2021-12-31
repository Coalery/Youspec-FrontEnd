import Title from '../../../Title/Title';
import './DatabaseERD.scss';

function DatabaseERD({ dbERDUrl }) {
  if (!dbERDUrl) return null;

  return (
    <div id="db-erd" className="project-content">
      <Title icon="🗂️" text="데이터베이스 ERD" />
      <hr />
      <img className="project-dberd-image" src={dbERDUrl} alt="Databse ERD" />
    </div>
  );
}

export default DatabaseERD;
