import Title from '../../../Title/Title';
import './ProjectIntroduction.scss';

function ProjectIntroduction() {
  return (
    <div id="project-introduction">
      <Title icon="📙" text="프로젝트 소개" />
      <p className="project-introduction-content">
        배달 음식을 시키면 배달료가 발생하고, 이는 음식을 많이 시킬수록 적어지게
        됩니다. 이에 착안하여, 사람을 모아 한꺼번에 배달을 시킬 수 있도록 같이
        먹을 사람들을 구할 수 있는 서비스가 있다면 어떨까? 라는 생각에 시작된
        프로젝트입니다.
      </p>
    </div>
  );
}

export default ProjectIntroduction;
