import * as projectApi from '../api/project';
import {
  createPromiseThunk,
  handleAsyncActions,
  reducerUtils,
} from '../lib/asyncUtils';
import { cancelEdit } from './project_edit';

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

export const createProject = (project) => async (dispatch, getState) => {
  try {
    const token = getState().login.login.data?.token;
    const data = await projectApi.createProject(token, project);
    window.location.href = window.location.origin + '/project/' + data.id;
  } catch (e) {}
};

export const saveProject = (project) => async (dispatch, getState) => {
  try {
    const token = getState().login.login.data?.token;
    await projectApi.saveProject(token, project);
    dispatch(cancelEdit());
    dispatch(getProjectById(project.id));
  } catch (e) {}
};

export const removeProject = (projectId) => async (dispatch, getState) => {
  try {
    const token = getState().login.login.data?.token;
    await projectApi.removeProject(token, projectId);
    window.location.href = window.location.origin;
  } catch (e) {}
};

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
