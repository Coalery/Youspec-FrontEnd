import { combineReducers } from 'redux';

import project from './project';
import techStack from './tech_stack';
import portfolio from './portfolio';
import portfolioEdit from './portfolio_edit';

const rootReducer = combineReducers({
  project,
  techStack,
  portfolio,
  portfolioEdit,
});

export default rootReducer;
