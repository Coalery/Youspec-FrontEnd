const LETS_EDIT = 'PROJECT_EDIT/LETS_EDIT';
const END_EDIT = 'PROJECT_EDIT/END_EDIT';

const EDIT_NAME = 'PROJECT_EDIT/EDIT_NAME';
const EDIT_START_DATE = 'PROJECT_EDIT/EDIT_START_DATE';
const EDIT_END_DATE = 'PROJECT_EDIT/EDIT_END_DATE';
const EDIT_COVER_IMAGE_URL = 'PROJECT_EDIT/EDIT_COVER_IMAGE_URL';
const EDIT_INTRODUCTION = 'PROJECT_EDIT/EDIT_INTRODUCTION';
const EDIT_FEATURE_IMAGE_URLS = 'PROJECT_EDIT/EDIT_FEATURE_IMAGE_URLS';
const EDIT_FEATURE_STRINGS = 'PROJECT_EDIT/EDIT_FEATURE_STRINGS';
const EDIT_DB_ERD_URL = 'PROJECT_EDIT/EDIT_DB_ERD_URL';
const EDIT_RESULTS = 'PROJECT_EDIT/EDIT_RESULTS';
const EDIT_TECH_STACKS = 'PROJECT_EDIT/EDIT_TECH_STACKS';
const EDIT_MAKERS = 'PROJECT_EDIT/EDIT_MAKERS';
const EDIT_PLATFORMS = 'PROJECT_EDIT/EDIT_PLATFORMS';
const EDIT_TROUBLESHOOTING = 'PROJECT_EDIT/EDIT_TROUBLESHOOTING';
const EDIT_API_CATEGORIES = 'PROJECT_EDIT/EDIT_API_CATEGORIES';

const initialState = {
  isEditMode: false,
  name: null,
  startDate: null,
  endDate: null,
  coverImageUrl: null,
  introduction: null,
  featureImageUrls: [],
  featureStrings: [],
  dbERDUrl: null,
  results: [],
  techStacks: [],
  makers: [],
  platforms: [],
  apiCategories: [],
};

export const startEdit = (state) => ({ type: LETS_EDIT, payload: state });

export const endEdit = () => ({ type: END_EDIT });

export const editName = (name) => ({ type: EDIT_NAME, payload: name });

export const editStartDate = (startDate) => ({
  type: EDIT_START_DATE,
  payload: startDate,
});

export const editEndDate = (endDate) => ({
  type: EDIT_END_DATE,
  payload: endDate,
});

export const editCoverImageUrl = (imageUrl) => ({
  type: EDIT_COVER_IMAGE_URL,
  payload: imageUrl,
});

export const editIntroduction = (introduction) => ({
  type: EDIT_INTRODUCTION,
  payload: introduction,
});

export const editFeatureImageUrls = (featureImageUrls) => ({
  type: EDIT_FEATURE_IMAGE_URLS,
  payload: featureImageUrls,
});

export const editFeatureStrings = (featureStrings) => ({
  type: EDIT_FEATURE_STRINGS,
  payload: featureStrings,
});

export const editDBERDUrl = (dbERDUrl) => ({
  type: EDIT_DB_ERD_URL,
  payload: dbERDUrl,
});

export const editResults = (results) => ({
  type: EDIT_RESULTS,
  payload: results,
});

export const editTechStacks = (techStacks) => ({
  type: EDIT_TECH_STACKS,
  payload: techStacks,
});

export const editMakers = (makers) => ({ type: EDIT_MAKERS, payload: makers });

export const editTroubleshooting = (troubleshooting) => ({
  type: EDIT_TROUBLESHOOTING,
  payload: troubleshooting,
});

export const editPlatforms = (platforms) => ({
  type: EDIT_PLATFORMS,
  payload: platforms,
});

export const editApiCategories = (apiCategories) => ({
  type: EDIT_API_CATEGORIES,
  payload: apiCategories,
});

export default function projectEdit(state = initialState, action) {
  switch (action.type) {
    case LETS_EDIT:
      return {
        isEditMode: true,
        ...action.payload,
      };
    case END_EDIT:
      return initialState;
    case EDIT_NAME:
      return { ...state, name: action.payload };
    case EDIT_START_DATE:
      return { ...state, startDate: action.payload };
    case EDIT_END_DATE:
      return { ...state, endDate: action.payload };
    case EDIT_COVER_IMAGE_URL:
      return { ...state, coverImageUrl: action.payload };
    case EDIT_INTRODUCTION:
      return { ...state, introduction: action.payload };
    case EDIT_FEATURE_IMAGE_URLS:
      return { ...state, featureImageUrls: action.payload };
    case EDIT_FEATURE_STRINGS:
      return { ...state, featureStrings: action.payload };
    case EDIT_DB_ERD_URL:
      return { ...state, dbERDUrl: action.payload };
    case EDIT_RESULTS:
      return { ...state, results: action.payload };
    case EDIT_TECH_STACKS:
      return { ...state, techStacks: action.payload };
    case EDIT_MAKERS:
      return { ...state, makers: action.payload };
    case EDIT_TROUBLESHOOTING:
      return {
        ...state,
        platforms: state.platforms.map((platform) => {
          let cur = {
            ...platform,
            troubleshootings: platform.troubleshootings.filter(
              (ts) => ts.id !== action.payload.id
            ),
          }; // 같은 아이디 항목 제거
          if (platform.name === action.payload.platform) {
            cur = {
              ...cur,
              troubleshootings: [...cur.troubleshootings, action.payload],
            };
          } // 맞는 위치에 수정 사항 삽입
          return cur;
        }),
      };
    case EDIT_PLATFORMS:
      return { ...state, platforms: action.payload };
    case EDIT_API_CATEGORIES:
      return { ...state, apiCategories: action.payload };
    default:
      return state;
  }
}
