import { combineReducers } from 'redux';

import login from './login';
import project from './project';
import projectEdit from './project_edit';
import techStack from './tech_stack';
import portfolio from './portfolio';
import portfolioEdit from './portfolio_edit';

const rootReducer = combineReducers({
  login,
  project,
  projectEdit,
  techStack,
  portfolio,
  portfolioEdit,
});

export default rootReducer;
