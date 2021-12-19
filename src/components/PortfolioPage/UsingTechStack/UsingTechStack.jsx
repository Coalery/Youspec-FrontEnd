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
  stacks = [
    {
      id: 1,
      description: '이 기술로 이거이거 해봤구요 저거저거 해봤어요',
      techStack: {
        id: 1,
        name: 'Nest.js',
        iconUrl:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2560px-React-icon.svg.png',
      },
    },
    {
      id: 2,
      description: '이 기술로 이거이거 해봤구요 저거저거 해봤어요',
      techStack: {
        id: 2,
        name: 'React',
        iconUrl:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2560px-React-icon.svg.png',
      },
    },
    {
      id: 3,
      description: '이 기술로 이거이거 해봤구요 저거저거 해봤어요',
      techStack: {
        id: 3,
        name: 'MySQL',
        iconUrl:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2560px-React-icon.svg.png',
      },
    },
    {
      id: 4,
      description: '이 기술로 이거이거 해봤구요 저거저거 해봤어요',
      techStack: {
        id: 4,
        name: 'Firebase',
        iconUrl:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2560px-React-icon.svg.png',
      },
    },
  ];
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
