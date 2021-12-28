const LETS_EDIT = 'PORTFOLIO_EDIT/LETS_EDIT';
const END_EDIT = 'PORTFOLIO_EDIT/END_EDIT';

const EDIT_BG_IMAGE = 'PORTFOLIO_EDIT/EDIT_BG_IMAGE';
const EDIT_USER = 'PORTFOLIO_EDIT/EDIT_USER';
const EDIT_CONTACTS = 'PORTFOLIO_EDIT/EDIT_CONTACTS';
const EDIT_PHILOSOPHY = 'PORTFOLIO_EDIT/EDIT_PHILOSOPHY';
const EDIT_PHILOSOPHIES = 'PORTFOLIO_EDIT/EDIT_PHILOSOPHIES';
const EDIT_TECH_STACK = 'PORTFOLIO_EDIT/EDIT_TECH_STACK';
const EDIT_TECH_STACKS = 'PORTFOLIO_EDIT/EDIT_TECH_STACKS';
const EDIT_PROJECTS = 'PORTFOLIO_EDIT/EDIT_PROJECTS';
const EDIT_ACTIVITY = 'PORTFOLIO_EDIT/EDIT_ACTIVITY';
const EDIT_ACTIVITIES = 'PORTFOLIO_EDIT/EDIT_ACTIVITIES';
const EDIT_ACADEMIC = 'PORTFOLIO_EDIT/EDIT_ACADEMIC';
const EDIT_ACADEMICS = 'PORTFOLIO_EDIT/EDIT_ACADEMICS';

const initialState = {
  isEditMode: false,
  backgroundImage: null,
  user: {
    name: null,
    profileUrl: null,
    description: null,
    contacts: [],
  },
  philosophies: [],
  techStacks: [],
  projects: [],
  activities: [],
  academics: [],
};

export const endEdit = () => ({ type: END_EDIT });

export const startEdit = (state) => ({ type: LETS_EDIT, payload: state });

export const editUser = (user) => ({ type: EDIT_USER, payload: user });

export const editBackgroudnImage = (imageUrl) => ({
  type: EDIT_BG_IMAGE,
  payload: imageUrl,
});

export const editContacts = (contacts) => ({
  type: EDIT_CONTACTS,
  payload: contacts,
});

export const editPhilosophy = (philosophy) => ({
  type: EDIT_PHILOSOPHY,
  payload: philosophy,
});

export const editPhilosopies = (philosophies) => ({
  type: EDIT_PHILOSOPHIES,
  payload: philosophies,
});

export const editTechStack = (techStack) => ({
  type: EDIT_TECH_STACK,
  payload: techStack,
});

export const editTechStacks = (techStacks) => ({
  type: EDIT_TECH_STACKS,
  payload: techStacks,
});

export const editProjects = (projects) => ({
  type: EDIT_PROJECTS,
  payload: projects,
});

export const editActivity = (activity) => ({
  type: EDIT_ACTIVITY,
  payload: activity,
});

export const editActivities = (activities) => ({
  type: EDIT_ACTIVITIES,
  payload: activities,
});

export const editAcademic = (academic) => ({
  type: EDIT_ACADEMIC,
  payload: academic,
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
    case EDIT_USER:
      return { ...state, user: action.payload };
    case EDIT_BG_IMAGE:
      return { ...state, backgroundImage: action.payload };
    case EDIT_CONTACTS:
      return { ...state, contacts: action.payload };
    case EDIT_PHILOSOPHY:
      return {
        ...state,
        philosophies: [
          ...state.philosophies.filter((v) => v.id !== action.payload.id),
          action.payload,
        ],
      };
    case EDIT_PHILOSOPHIES:
      return { ...state, philosophies: action.payload };
    case EDIT_TECH_STACK:
      return {
        ...state,
        techStacks: [
          ...state.techStacks.filter((v) => v.id !== action.payload.id),
          action.payload,
        ],
      };
    case EDIT_TECH_STACKS:
      return { ...state, techStacks: action.payload };
    case EDIT_PROJECTS:
      return { ...state, projects: action.payload };
    case EDIT_ACTIVITY:
      return {
        ...state,
        activities: [
          ...state.activities.filter((v) => v.id !== action.payload.id),
          action.payload,
        ],
      };
    case EDIT_ACTIVITIES:
      return { ...state, activities: action.payload };
    case EDIT_ACADEMIC:
      return {
        ...state,
        academics: [
          ...state.academics.filter((v) => v.id !== action.payload.id),
          action.payload,
        ],
      };
    case EDIT_ACADEMICS:
      return { ...state, academics: action.payload };
    default:
      return state;
  }
}
