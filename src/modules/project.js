import * as projectApi from '../api/project';
import {
  createPromiseThunk,
  handleAsyncActions,
  reducerUtils,
} from '../lib/asyncUtils';

const GET_PROJECT_BY_ID = 'PROJECT/GET_PROJECT_BY_ID';
const GET_PROJECT_BY_ID_SUCCESS = 'PROJECT/GET_PROJECT_BY_ID_SUCCESS';
const GET_PROJECT_BY_ID_ERROR = 'PROJECT/GET_PROJECT_BY_ID_ERROR';

const GET_FILTERED_PROJECTS = 'PROJECT/GET_FILTERED_PROJECTS';
const GET_FILTERED_PROJECTS_SUCCESS = 'PROJECT/GET_FILTERED_PROJECTS_SUCCESS';
const GET_FILTERED_PROJECTS_ERROR = 'PROJECT/GET_FILTERED_PROJECTS_ERROR';

export const getProjectById = createPromiseThunk(
  GET_PROJECT_BY_ID,
  projectApi.getProjectById
);

export const getFilteredProjects = createPromiseThunk(
  GET_FILTERED_PROJECTS,
  projectApi.getFilteredProjects
);

const initialState = {
  projectById: reducerUtils.initial(),
  filteredProjects: reducerUtils.initial(),
};

export default function project(state = initialState, action) {
  switch (action.type) {
    case GET_PROJECT_BY_ID:
    case GET_PROJECT_BY_ID_SUCCESS:
    case GET_PROJECT_BY_ID_ERROR:
      return handleAsyncActions(GET_PROJECT_BY_ID, 'projectById')(
        state,
        action
      );
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
