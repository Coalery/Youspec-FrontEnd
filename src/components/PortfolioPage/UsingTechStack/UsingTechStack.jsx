import Title from '../../Title/Title';
import './UsingTechStack.scss';

function UsingTechStackUnit({ data }) {
  const { description, techStack } = data;
  const { name, iconUrl } = techStack;

  return (
    <div>
      <p className="portfolio-usingtechstack-info">
        <img
          className="portfolio-usingtechstack-icon"
          src={iconUrl}
          alt="tech-icon"
        />
        <span className="portfolio-usingtechstack-name">{name}</span>
      </p>
      <p className="portfolio-usingtechstack-desc">{description}</p>
    </div>
  );
}

function UsingTechStack({ stacks }) {
  return (
    <div className="portfolio-inside-container">
      <Title icon="✏️" text="기술 스택" />
      <hr />
      <div className="portfolio-usingtechstack-container">
        {stacks.map((stack) => (
          <UsingTechStackUnit
            key={`portfolio-usingtechstack-${stack.id}`}
            data={stack}
          />
        ))}
      </div>
    </div>
  );
}

export default UsingTechStack;
