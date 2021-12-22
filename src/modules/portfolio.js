import * as portfolioApi from '../api/portfolio';
import {
  createPromiseThunk,
  handleAsyncActions,
  reducerUtils,
} from '../lib/asyncUtils';

const GET_PORTFOLIO = 'GET_PORTFOLIO';
const GET_PORTFOLIO_SUCCESS = 'GET_PORTFOLIO_SUCCESS';
const GET_PORTFOLIO_ERROR = 'GET_PORTFOLIO_ERROR';

export const getPortfolio = createPromiseThunk(
  GET_PORTFOLIO,
  portfolioApi.getPortfolio
);

const initialState = {
  portfolio: reducerUtils.initial(),
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
