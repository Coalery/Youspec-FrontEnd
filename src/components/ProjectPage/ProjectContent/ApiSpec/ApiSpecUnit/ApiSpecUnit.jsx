import { Dialog } from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editApiUnit } from '../../../../../modules/project_edit';

import JSONPretty from 'react-json-pretty';
import Conditional from '../../../../Conditional/Conditional';
import Button from '@mui/material/Button';

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

function ApiVarEditUnit({ data, onChange }) {
  const { name, dataType, requestType, description, condition } = data;

  return (
    <div className="api-var-unit-container">
      <div className="api-var-unit-left">
        <input
          name="name"
          className="api-var-unit-name"
          value={name}
          onChange={(e) => onChange(e, data)}
        />
        <input
          name="dataType"
          className="api-var-unit-dataType"
          value={dataType}
          onChange={(e) => onChange(e, data)}
        />
        {requestType && (
          <input
            name="requestType"
            className="api-var-unit-request-type"
            value={requestType}
            onChange={(e) => onChange(e, data)}
          />
        )}
      </div>
      <div className="api-var-unit-right">
        <input
          name="description"
          className="api-var-unit-description"
          value={description}
          onChange={(e) => onChange(e, data)}
        />
        {condition && (
          <input
            name="condition"
            className="api-var-unit-condition"
            value={condition}
            onChange={(e) => onChange(e, data)}
          />
        )}
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

function parseUrlValues(url) {
  const re1 = /:[A-Za-z0-9]+/g;
  const re2 = /[A-Za-z0-9]+=/g;

  const res1 = url.match(re1) ?? [];
  const res2 = url.match(re2) ?? [];

  const rawResult = [
    ...res1.map((v) => v.substring(1, v.length)),
    ...res2.map((v) => v.substring(0, v.length - 1)),
  ];

  return rawResult.map((v) => {
    return {
      id: 'edit' + Math.random(),
      name: v,
      datatType: ' ',
      requestType: ' ',
      description: ' ',
      condition: ' ',
    };
  });
}

function parseJsonValues(json) {
  const parsedJson = JSON.parse(json);

  const Q = [parsedJson];
  const rawResult = [];

  while (Q.length) {
    const cur = Q.shift();

    if (Array.isArray(cur)) {
      Q.push(...cur);
    } else if (typeof cur === 'object') {
      rawResult.push(...Object.keys(cur));
      Q.push(...Object.values(cur).filter((v) => v && typeof v === 'object')); // 객체와 배열 모두 포함
    } else rawResult.push(cur);
  }

  return rawResult.map((v) => {
    return {
      id: 'edit' + Math.random(),
      name: v,
      datatType: ' ',
      requestType: ' ',
      description: ' ',
      condition: ' ',
    };
  });
}

function handleDuplication(val) {
  return val.filter(
    (v, idx, self) => idx === self.findIndex((t) => t.name === v.name)
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

  const onChangeReqResValue = (e, val) => {
    dispatch(
      editApiUnit(parentId, {
        ...data,
        requestValues: [
          ...data.requestValues.filter((v) => v.id !== val.id),
          {
            ...val,
            [e.target.name]: e.target.value,
          },
        ],
      })
    );
  };

  const onClickCreateRequest = () => {
    let result;
    if (requestExample[0] === '/')
      result = [...requestValues, ...parseUrlValues(requestUrl)];
    else result = [...requestValues, ...parseJsonValues(requestExample)];

    dispatch(
      editApiUnit(parentId, {
        ...data,
        requestValues: handleDuplication(result),
      })
    );
  };

  const onClickCreateResponse = () => {
    dispatch(
      editApiUnit(parentId, {
        ...data,
        responseValues: handleDuplication([
          ...responseValues,
          ...parseJsonValues(responseExample),
        ]),
      })
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
        value={description ?? ''}
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
        <div className="api-spec-unit-dialog-subtitle-container">
          <p className="api-spec-unit-dialog-subtitle">요청에 필요한 변수</p>
          <p>
            <Button
              variant="contained"
              disableElevation
              onClick={onClickCreateRequest}
            >
              생성
            </Button>
          </p>
        </div>
        {requestValues.map((requestValue) => (
          <ApiVarEditUnit
            key={`api-spec-request-values-${requestValue.id}`}
            data={requestValue}
            onChange={onChangeReqResValue}
          />
        ))}
        <p className="api-spec-unit-dialog-subtitle">요청 예시</p>
        <textarea
          name="requestExample"
          className="api-spec-unit-examples"
          value={requestExample}
          onChange={onChange}
        />
        <div className="api-spec-unit-dialog-subtitle-container">
          <p className="api-spec-unit-dialog-subtitle">응답에 포함된 변수</p>
          <p>
            <Button
              variant="contained"
              disableElevation
              onClick={onClickCreateResponse}
            >
              생성
            </Button>
          </p>
        </div>
        {responseValues.map((responseValue) => (
          <ApiVarEditUnit
            key={`api-spec-request-values-${responseValue.id}`}
            data={responseValue}
            onChange={onChangeReqResValue}
          />
        ))}
        <p className="api-spec-unit-dialog-subtitle">응답 예시</p>
        <textarea
          name="responseExample"
          className="api-spec-unit-examples"
          value={responseExample}
          onChange={onChange}
        />
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
