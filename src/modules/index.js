import { combineReducers } from 'redux';

import project from './project';
import techStack from './tech_stack';

const rootReducer = combineReducers({ project, techStack });

export default rootReducer;
