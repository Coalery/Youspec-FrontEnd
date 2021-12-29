import * as portfolioApi from '../api/portfolio';
import {
  createPromiseThunk,
  handleAsyncActions,
  reducerUtils,
} from '../lib/asyncUtils';

const GET_PORTFOLIO = 'PORTFOLIO/GET_PORTFOLIO';
const GET_PORTFOLIO_SUCCESS = 'PORTFOLIO/GET_PORTFOLIO_SUCCESS';
const GET_PORTFOLIO_ERROR = 'PORTFOLIO/GET_PORTFOLIO_ERROR';

const SAVE_PORTFOLIO = 'PORTFOLIO/SAVE_PORTFOLIO';
const SAVE_PORTFOLIO_SUCCESS = 'PORTFOLIO/SAVE_PORTFOLIO_SUCCESS';
const SAVE_PORTFOLIO_ERROR = 'PORTFOLIO/SAVE_PORTFOLIO_ERROR';

export const getPortfolio = createPromiseThunk(
  GET_PORTFOLIO,
  portfolioApi.getPortfolio
);

export const savePortfolio = createPromiseThunk(
  SAVE_PORTFOLIO,
  portfolioApi.savePortfolio
);

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
    case SAVE_PORTFOLIO:
    case SAVE_PORTFOLIO_SUCCESS:
    case SAVE_PORTFOLIO_ERROR:
      return handleAsyncActions(SAVE_PORTFOLIO, 'savePortfolio')(state, action);
    default:
      return state;
  }
}
