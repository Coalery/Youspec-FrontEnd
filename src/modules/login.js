import {
  createPromiseThunk,
  handleAsyncActions,
  reducerUtils,
} from '../lib/asyncUtils';
import firebaseLogin from '../lib/firebaseAuth';

const LOGIN = 'LOGIN/LOGIN';
const LOGIN_SUCCESS = 'LOGIN/LOGIN_SUCCESS';
const LOGIN_ERROR = 'LOGIN/LOGIN_ERROR';

export const tryLogin = createPromiseThunk(LOGIN, firebaseLogin);

const initialState = {
  login: reducerUtils.initial(),
};

export default function login(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
    case LOGIN_SUCCESS:
    case LOGIN_ERROR:
      return handleAsyncActions(LOGIN, 'login')(state, action);
    default:
      return state;
  }
}
