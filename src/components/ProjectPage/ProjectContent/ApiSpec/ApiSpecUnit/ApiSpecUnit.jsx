import { Dialog } from '@mui/material';
import { useState } from 'react';
import JSONPretty from 'react-json-pretty';
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

function ApiSpecUnit({ data }) {
  const { title, requestUrl, method } = data;

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
      <ApiSpecUnitDialog open={open} onClose={onClose} data={data} />
    </>
  );
}

export default ApiSpecUnit;