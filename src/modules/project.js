import * as projectApi from '../api/project';
import {
  createPromiseThunk,
  handleAsyncActions,
  reducerUtils,
} from '../lib/asyncUtils';

const GET_FILTERED_PROJECTS = 'GET_FILTERED_PROJECTS';
const GET_FILTERED_PROJECTS_SUCCESS = 'GET_FILTERED_PROJECTS_SUCCESS';
const GET_FILTERED_PROJECTS_ERROR = 'GET_FILTERED_PROJECTS_ERROR';

export const getFilteredProjects = createPromiseThunk(
  GET_FILTERED_PROJECTS,
  projectApi.getFilteredProjects
);

const initialState = {
  filteredProjects: reducerUtils.initial(),
};

export default function project(state = initialState, action) {
  switch (action.type) {
    case GET_FILTERED_PROJECTS:
    case GET_FILTERED_PROJECTS_SUCCESS:
    case GET_FILTERED_PROJECTS_ERROR:
      return handleAsyncActions(GET_FILTERED_PROJECTS, 'filteredProjects')(
        state,
        action
      );
    default:
      return state;
  }
}
