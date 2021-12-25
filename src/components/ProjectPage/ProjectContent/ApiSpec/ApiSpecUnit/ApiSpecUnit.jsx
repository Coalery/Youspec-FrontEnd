import { Dialog } from '@mui/material';
import { useState } from 'react';
import JSONPretty from 'react-json-pretty';
import { useDispatch, useSelector } from 'react-redux';
import { editApiUnit } from '../../../../../modules/project_edit';
import Conditional from '../../../../Conditional/Conditional';
import './ApiSpecUnit.scss';

function ApiVarUnit({ data }) {
  const { name, dataType, requestType, description, condition } = data;

  return (
    <div className="api-var-unit-container">
      <div className="api-var-unit-left">
        <p className="api-var-unit-name">{name}</p>
        <p>{dataType}</p>
        {requestType && (
          <p className="api-var-unit-request-type">{requestType}</p>
        )}
      </div>
      <div className="api-var-unit-right">
        <p>{description}</p>
        {condition && <p>{condition}</p>}
      </div>
    </div>
  );
}

function ApiSpecUnitDialog({ onClose, open, data }) {
  const {
    title,
    requestValues,
    requestExample,
    responseValues,
    responseExample,
  } = data;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open} fullWidth maxWidth="md">
      <p className="api-spec-unit-dialog-title">{title}</p>
      <div className="api-spec-unit-dialog">
        <p className="api-spec-unit-dialog-subtitle">요청에 필요한 변수</p>
        {requestValues.map((requestValue) => (
          <ApiVarUnit
            key={`api-spec-request-values-${requestValue.id}`}
            data={requestValue}
          />
        ))}
        <p className="api-spec-unit-dialog-subtitle">요청 예시</p>
        <JSONPretty className="json-pretty" data={requestExample} />
        <p className="api-spec-unit-dialog-subtitle">응답에 포함된 변수</p>
        {responseValues.map((requestValue) => (
          <ApiVarUnit
            key={`api-spec-request-values-${requestValue.id}`}
            data={requestValue}
          />
        ))}
        <p className="api-spec-unit-dialog-subtitle">응답 예시</p>
        <JSONPretty className="json-pretty" data={responseExample} />
        <div style={{ height: '16px' }} />
      </div>
    </Dialog>
  );
}

function ApiSpecUnitEditDialog({ onClose, open, parentId, data }) {
  const dispatch = useDispatch();

  const {
    title,
    description,
    method,
    requestUrl,
    requestValues,
    requestExample,
    responseValues,
    responseExample,
  } = data;

  const handleClose = () => {
    onClose();
  };

  const onChange = (e) => {
    dispatch(
      editApiUnit(parentId, { ...data, [e.target.name]: e.target.value })
    );
  };

  return (
    <Dialog onClose={handleClose} open={open} fullWidth maxWidth="md">
      <input
        name="title"
        className="api-spec-unit-dialog-title"
        value={title}
        onChange={onChange}
      />
      <input
        name="description"
        className="api-spec-unit-dialog-inp"
        value={description}
        onChange={onChange}
        placeholder="설명"
      />
      <input
        name="method"
        className="api-spec-unit-dialog-inp"
        value={method}
        onChange={onChange}
        placeholder="HTTP Request Method"
      />
      <input
        name="requestUrl"
        className="api-spec-unit-dialog-inp"
        value={requestUrl}
        onChange={onChange}
        placeholder="요청 URL"
      />
      <div className="api-spec-unit-dialog">
        <p className="api-spec-unit-dialog-subtitle">요청에 필요한 변수</p>
        {requestValues.map((requestValue) => (
          <ApiVarUnit
            key={`api-spec-request-values-${requestValue.id}`}
            data={requestValue}
          />
        ))}
        <p className="api-spec-unit-dialog-subtitle">요청 예시</p>
        <JSONPretty className="json-pretty" data={requestExample} />
        <p className="api-spec-unit-dialog-subtitle">응답에 포함된 변수</p>
        {responseValues.map((requestValue) => (
          <ApiVarUnit
            key={`api-spec-request-values-${requestValue.id}`}
            data={requestValue}
          />
        ))}
        <p className="api-spec-unit-dialog-subtitle">응답 예시</p>
        <JSONPretty className="json-pretty" data={responseExample} />
        <div style={{ height: '16px' }} />
      </div>
    </Dialog>
  );
}

function ApiSpecUnit({ parentId, data }) {
  const { title, requestUrl, method } = data;
  const isEditMode = useSelector((state) => state.projectEdit.isEditMode);

  const [open, setOpen] = useState(false);

  const onClick = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <tr className="api-spec-unit-row" onClick={onClick}>
        <td>{title}</td>
        <td>{requestUrl}</td>
        <td align="center">{method}</td>
      </tr>
      <Conditional condition={isEditMode}>
        <ApiSpecUnitDialog open={open} onClose={onClose} data={data} />
        <ApiSpecUnitEditDialog
          open={open}
          onClose={onClose}
          parentId={parentId}
          data={data}
        />
      </Conditional>
    </>
  );
}

export default ApiSpecUnit;
