import { Dialog, DialogTitle, List } from '@mui/material';
import { useCallback, useState } from 'react';
import './ApiSpecUnit.scss';

function ApiVarUnit({ data, isRequest }) {
  return <div>{data.name}</div>;
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
      <DialogTitle>{title}</DialogTitle>
      <div className="api-spec-unit-dialog">
        <p>요청에 필요한 변수</p>
        {requestValues.map((requestValue) => (
          <ApiVarUnit
            key={`api-spec-request-values-${requestValue.id}`}
            data={requestValue}
            isRequest
          />
        ))}
        <p>요청 예시</p>
        <p>{requestExample}</p>
        <p>응답에 포함된 변수</p>
        {responseValues.map((requestValue) => (
          <ApiVarUnit
            key={`api-spec-request-values-${requestValue.id}`}
            data={requestValue}
            isRequest
          />
        ))}
        <p>응답 예시</p>
        <p>{responseExample}</p>
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
