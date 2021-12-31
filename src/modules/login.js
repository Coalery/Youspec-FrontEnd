import { signUp } from '../api/user';
import {
  createPromiseThunk,
  handleAsyncActions,
  reducerUtils,
} from '../lib/asyncUtils';

import * as fbAuth from '../lib/firebaseAuth';

const LOGIN = 'LOGIN/LOGIN';
const LOGIN_SUCCESS = 'LOGIN/LOGIN_SUCCESS';
const LOGIN_ERROR = 'LOGIN/LOGIN_ERROR';

const LOGOUT = 'LOGIN/LOGOUT';

export const tryLogin = createPromiseThunk(LOGIN, async (_, provider) => {
  const token = await fbAuth.login(provider);
  const user = await signUp(token);
  return { user, token };
});

export const tryLogout = () => async (dispatch) => {
  await fbAuth.logout();
  dispatch({ type: LOGOUT });
};

const initialState = {
  login: reducerUtils.initial({ user: null, token: null }),
};

export default function login(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
    case LOGIN_SUCCESS:
    case LOGIN_ERROR:
      return handleAsyncActions(LOGIN, 'login')(state, action);
    case LOGOUT:
      return { login: reducerUtils.initial({ user: null, token: null }) };
    default:
      return state;
  }
}
