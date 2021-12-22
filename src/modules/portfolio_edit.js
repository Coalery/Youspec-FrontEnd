const LETS_EDIT = 'LETS_EDIT';
const END_EDIT = 'END_EDIT';

const EDIT_PROFILE_IMAGE = 'EDIT_PROFILE_IMAGE';
const EDIT_BG_IMAGE = 'EDIT_BG_IMAGE';
const EDIT_USERNAME = 'EDIT_USERNAME';
const EDIT_DESCRIPTION = 'EDIT_DESCRIPTION';
const EDIT_CONTACTS = 'EDIT_CONTACTS';
const EDIT_PHILOSOPHIES = 'EDIT_PHILOSOPHIES';
const EDIT_TECH_STACKS = 'EDIT_TECH_STACKS';
const EDIT_PROJECTS = 'EDIT_PROJECTS';
const EDIT_ACTIVITIES = 'EDIT_ACTIVITIES';
const EDIT_ACADEMICS = 'EDIT_ACADEMICS';

const initialState = {
  isEditMode: false,
  profileImage: null,
  backgroundImage: null,
  username: null,
  description: null,
  contacts: [],
  philosophies: [],
  techStacks: [],
  projects: [],
  activities: [],
  academics: [],
};

export const endEdit = () => ({ type: END_EDIT });

export const startEdit = (state) => ({ type: LETS_EDIT, payload: state });

export const editProfileImage = (imageUrl) => ({
  type: EDIT_PROFILE_IMAGE,
  payload: imageUrl,
});

export const editBackgroudnImage = (imageUrl) => ({
  type: EDIT_BG_IMAGE,
  payload: imageUrl,
});

export const editUserName = (username) => ({
  type: EDIT_USERNAME,
  payload: username,
});

export const editDescription = (description) => ({
  type: EDIT_DESCRIPTION,
  payload: description,
});

export const editContacts = (contacts) => ({
  type: EDIT_CONTACTS,
  payload: contacts,
});

export const editPhilosopies = (philosophies) => ({
  type: EDIT_PHILOSOPHIES,
  payload: philosophies,
});

export const editTechStacks = (techStacks) => ({
  type: EDIT_TECH_STACKS,
  payload: techStacks,
});

export const editProjects = (projects) => ({
  type: EDIT_PROJECTS,
  payload: projects,
});

export const editActivities = (activities) => ({
  type: EDIT_ACTIVITIES,
  payload: activities,
});

export const editAcademics = (academics) => ({
  type: EDIT_ACADEMICS,
  payload: academics,
});

export default function portfolioEdit(state = initialState, action) {
  switch (action.type) {
    case END_EDIT:
      return initialState;
    case LETS_EDIT:
      return {
        isEditMode: true,
        ...action.payload,
      };
    case EDIT_PROFILE_IMAGE:
      return { ...state, profileImage: action.payload };
    case EDIT_BG_IMAGE:
      return { ...state, backgroundImage: action.payload };
    case EDIT_USERNAME:
      console.log(state);
      console.log(action.payload);
      return { ...state, username: action.payload };
    case EDIT_DESCRIPTION:
      return { ...state, description: action.payload };
    case EDIT_CONTACTS:
      return { ...state, contacts: action.payload };
    case EDIT_PHILOSOPHIES:
      return { ...state, philosophies: action.payload };
    case EDIT_TECH_STACKS:
      return { ...state, techStacks: action.payload };
    case EDIT_PROJECTS:
      return { ...state, projects: action.payload };
    case EDIT_ACTIVITIES:
      return { ...state, activities: action.payload };
    case EDIT_ACADEMICS:
      return { ...state, academics: action.payload };
    default:
      return state;
  }
}
