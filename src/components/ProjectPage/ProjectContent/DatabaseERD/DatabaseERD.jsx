import Title from '../../../Title/Title';
import './DatabaseERD.scss';

function DatabaseERD({ dbERDUrl }) {
  dbERDUrl =
    'https://media.vlpt.us/images/ash3767/post/282c7b17-97bc-4488-8774-120cf278e9ed/image.png';

  if (!dbERDUrl) return null;

  return (
    <div id="db-erd">
      <Title icon="🗂️" text="데이터베이스 ERD" />
      <img className="project-dberd-image" src={dbERDUrl} alt="Databse ERD" />
    </div>
  );
}

export default DatabaseERD;
