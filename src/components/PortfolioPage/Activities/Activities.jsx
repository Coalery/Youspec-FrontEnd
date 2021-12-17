import dateFormat from '../../../lib/dateFormat';
import Title from '../Title/Title';
import './Activities.scss';

function ActivityUnit({ data }) {
  const { title, description, startDate, endDate } = data;

  return (
    <div className="activity-unit-container">
      <div className="activity-unit-point" />
      <div className="activity-unit-content">
        <div className="activity-unit-date">
          {dateFormat(startDate)} ~ {dateFormat(endDate)}
        </div>
        <div className="activity-unit-title">{title}</div>
        <div className="activity-unit-desc">{description}</div>
      </div>
    </div>
  );
}

function Activities({ activities }) {
  activities = [
    {
      id: 1,
      title: '화명고등학교 프로그래밍 동아리 설립 및 부장',
      description: '21명의 동아리 부원에게 자바의 기본에 대해서 알려주었다.',
      startDate: new Date(2019, 3),
      endDate: new Date(2020, 2),
    },
    {
      id: 2,
      title: '카카오톡 오픈채팅방 관리자',
      description:
        '약 5,000명 규모의 소프트웨어 카카오톡 오픈채팅방들 관리하고 있다.',
      startDate: new Date(2019, 4),
      endDate: null,
    },
    {
      id: 3,
      title: '설리번 프로젝트 설리번',
      description:
        '디데이 앱을 만들어가는 과정을 통해 플러터에 대해 12명의 헬렌에게 알려주었다.',
      startDate: new Date(2021, 4, 3),
      endDate: new Date(2021, 8, 29),
    },
    {
      id: 4,
      title: '경희대학교 중앙 IT 동아리 쿠러그 운영진',
      description:
        '동아리 가입 처리, 경희대학교 소프트웨어 해커톤 khuthon 스태프',
      startDate: new Date(2021, 6),
      endDate: null,
    },
  ];

  return (
    <div className="portfolio-inside-container">
      <Title icon="🙌" text="참여한 활동" />
      <div className="portfolio-activities-container">
        <div className="portfolio-activities-timeline" />
        <div className="portfolio-activities-content">
          {activities.map((activity) => (
            <ActivityUnit
              key={`portfolio-activity-${activity.id}`}
              data={activity}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Activities;
