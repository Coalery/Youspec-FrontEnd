import { useDispatch, useSelector } from 'react-redux';
import Conditional from '../../../Conditional/Conditional';
import Title from '../../../Title/Title';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import './Troubleshootings.scss';
import {
  editPlatforms,
  editTroubleshooting,
} from '../../../../modules/project_edit';

function TroubleshootingUnit({ data, isEditMode }) {
  const dispatch = useDispatch();

  const onChange = (e) => {
    dispatch(editTroubleshooting({ ...data, [e.target.name]: e.target.value }));
  };

  return (
    <Conditional condition={isEditMode}>
      <div className="troubleshoot-unit-container">
        <p className="troubleshoot-unit-title">
          [{data.platform}] {data.title}
        </p>
        <p className="troubleshoot-unit-desc">{data.contents}</p>
      </div>
      <div className="troubleshoot-unit-container">
        <p className="troubleshoot-unit-title-container">
          <span className="troubleshoot-unit-title">[{data.platform}]</span>{' '}
          <input
            name="title"
            className="troubleshoot-unit-title troubleshoot-unit-title-edit"
            value={data.title}
            onChange={onChange}
          />
        </p>
        <textarea
          name="contents"
          className="troubleshoot-unit-desc"
          value={data.contents}
          onChange={onChange}
        />
      </div>
    </Conditional>
  );
}

function Troubleshootings() {
  const platforms = useSelector(
    (state) => state.project.projectById.data.platforms
  );
  const ePlatforms = useSelector((state) => state.projectEdit.platforms);
  const isEditMode = useSelector((state) => state.projectEdit.isEditMode);
  const dispatch = useDispatch();

  const troubleshootings = platforms
    .map((platform) =>
      platform.troubleshootings.map((troubleshooting) => ({
        ...troubleshooting,
        platform: platform.name,
      }))
    )
    .flat();

  const eTroubleshootings = ePlatforms
    .map((platform) =>
      platform.troubleshootings.map((troubleshooting) => ({
        ...troubleshooting,
        platform: platform.name,
      }))
    )
    .flat();

  const onClick = () => {
    dispatch(
      editPlatforms([
        {
          ...ePlatforms[0],
          troubleshootings: [
            ...ePlatforms[0].troubleshootings,
            {
              id: 'edit' + Math.random(),
              title: '',
              contents: '',
            },
          ],
        },
        ...ePlatforms.slice(1),
      ])
    );
  };

  return (
    <div id="troubleshootings" className="project-content">
      <Title icon="🔨" text="트러블슈팅 경험" />
      <hr />
      <Conditional condition={isEditMode}>
        <div className="troubleshootings-container">
          {troubleshootings.map((tShoot) => (
            <TroubleshootingUnit
              key={`troubleshootings-${tShoot.id}`}
              data={tShoot}
            />
          ))}
        </div>
        <div className="troubleshootings-container">
          <Conditional condition={eTroubleshootings.length === 0}>
            <>
              {eTroubleshootings.map((tShoot) => (
                <TroubleshootingUnit
                  key={`troubleshootings-${tShoot.id}`}
                  data={tShoot}
                  isEditMode
                />
              ))}
              <div className="project-add-troubleshooting" onClick={onClick}>
                <AddCircleOutlineIcon
                  style={{ color: 'rgba(0, 0, 0, 0.2)' }}
                  fontSize="large"
                />
              </div>
            </>
            <p>플랫폼을 추가해주세요.</p>
          </Conditional>
        </div>
      </Conditional>
    </div>
  );
}

export default Troubleshootings;
