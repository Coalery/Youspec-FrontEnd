import * as portfolioApi from '../api/portfolio';
import {
  createPromiseThunk,
  handleAsyncActions,
  reducerUtils,
} from '../lib/asyncUtils';
import { endEdit } from './portfolio_edit';

const GET_PORTFOLIO = 'PORTFOLIO/GET_PORTFOLIO';
const GET_PORTFOLIO_SUCCESS = 'PORTFOLIO/GET_PORTFOLIO_SUCCESS';
const GET_PORTFOLIO_ERROR = 'PORTFOLIO/GET_PORTFOLIO_ERROR';

export const getPortfolio = createPromiseThunk(
  GET_PORTFOLIO,
  portfolioApi.getPortfolio
);

export const savePortfolio = (portfolio) => async (dispatch, getState) => {
  try {
    const token = getState().login.login.data?.token;
    await portfolioApi.savePortfolio(token, portfolio);
    dispatch(endEdit());
    dispatch(getPortfolio(portfolio.customName));
  } catch (e) {}
};

const initialState = {
  portfolio: reducerUtils.initial(),
  savePortfolio: reducerUtils.initial(),
};

export default function portfolio(state = initialState, action) {
  switch (action.type) {
    case GET_PORTFOLIO:
    case GET_PORTFOLIO_SUCCESS:
    case GET_PORTFOLIO_ERROR:
      return handleAsyncActions(GET_PORTFOLIO, 'portfolio')(state, action);
    default:
      return state;
  }
}
