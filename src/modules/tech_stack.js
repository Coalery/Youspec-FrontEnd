import * as techStackApi from '../api/tech_stack';
import {
  createPromiseThunk,
  handleAsyncActions,
  reducerUtils,
} from '../lib/asyncUtils';

const GET_ALL_TECH_STACK = 'GET_ALL_TECH_STACK';
const GET_ALL_TECH_STACK_SUCCESS = 'GET_ALL_TECH_STACK_SUCCESS';
const GET_ALL_TECH_STACK_ERROR = 'GET_ALL_TECH_STACK_ERROR';

export const getAllTechStack = createPromiseThunk(
  GET_ALL_TECH_STACK,
  techStackApi.getAllTechStacks
);

const initialState = {
  allTechStack: reducerUtils.initial(),
};

export default function techStack(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_TECH_STACK:
    case GET_ALL_TECH_STACK_SUCCESS:
    case GET_ALL_TECH_STACK_ERROR:
      return handleAsyncActions(GET_ALL_TECH_STACK, 'allTechStack')(
        state,
        action
      );
    default:
      return state;
  }
}
