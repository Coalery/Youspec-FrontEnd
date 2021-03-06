const LETS_EDIT = 'PROJECT_EDIT/LETS_EDIT';
const CANCEL_EDIT = 'PROJECT_EDIT/CANCEL_EDIT';

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
const EDIT_TSHOOTING_PLATFORM = 'PROJECT_EDIT/EDIT_TSHOOTING_PLATFORM';
const EDIT_API_UNIT = 'PROJECT_EDIT/EDIT_API_UNIT';
const EDIT_API_CATEGORY = 'PROJECT_EDIT/EDIT_API_CATEGORY';
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
  projectTechStacks: [],
  projectUsers: [],
  platforms: [],
  apiCategories: [],
};

export const startEdit = (state) => ({ type: LETS_EDIT, payload: state });

export const cancelEdit = () => ({ type: CANCEL_EDIT });

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

export const editTroubleshootingPlatform = (troubleshooting) => ({
  type: EDIT_TSHOOTING_PLATFORM,
  payload: troubleshooting,
});

export const editPlatforms = (platforms) => ({
  type: EDIT_PLATFORMS,
  payload: platforms,
});

export const editApiUnit = (parentId, apiUnit) => ({
  type: EDIT_API_UNIT,
  payload: { parentId, apiUnit },
});

export const editApiCategory = (apiCategory) => ({
  type: EDIT_API_CATEGORY,
  payload: apiCategory,
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
    case CANCEL_EDIT:
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
      return { ...state, projectTechStacks: action.payload };
    case EDIT_MAKERS:
      return { ...state, projectUsers: action.payload };
    case EDIT_TROUBLESHOOTING:
      return {
        ...state,
        platforms: state.platforms.map((platform) => {
          let cur = {
            ...platform,
            troubleshootings: platform.troubleshootings.filter(
              (ts) => ts.id !== action.payload.id
            ),
          }; // ?????? ????????? ?????? ??????
          if (platform.name === action.payload.platform) {
            cur = {
              ...cur,
              troubleshootings: [...cur.troubleshootings, action.payload],
            };
          } // ?????? ????????? ?????? ?????? ??????
          return cur;
        }),
      };
    case EDIT_TSHOOTING_PLATFORM:
      const { id: curId, platform: curPlatform } = action.payload;
      const curIndex = state.platforms.findIndex(
        (platform) => platform.name === curPlatform
      );
      const nextIndex = (curIndex + 1) % state.platforms.length;

      return {
        ...state,
        platforms: [
          ...state.platforms.filter(
            (v) =>
              v.id !== state.platforms[curIndex].id &&
              v.id !== state.platforms[nextIndex].id
          ), // ?????? ???????????? ????????? ??????
          {
            ...state.platforms[curIndex],
            troubleshootings: state.platforms[curIndex].troubleshootings.filter(
              (ts) => ts.id !== curId
            ),
          }, // ?????? ???????????? ??????????????? ????????? ??????
          {
            ...state.platforms[nextIndex],
            troubleshootings: [
              ...state.platforms[nextIndex].troubleshootings,
              action.payload,
            ],
          }, // ?????? ???????????? ??????????????? ??????
        ],
      };
    case EDIT_PLATFORMS:
      return { ...state, platforms: action.payload };
    case EDIT_API_UNIT:
      const parent = state.apiCategories.find(
        (v) => v.id === action.payload.parentId
      );
      return {
        ...state,
        apiCategories: [
          ...state.apiCategories.filter(
            (v) => v.id !== action.payload.parentId
          ),
          {
            ...parent,
            apiUnits: [
              ...parent.apiUnits.filter(
                (v) => v.id !== action.payload.apiUnit.id
              ),
              action.payload.apiUnit,
            ],
          },
        ],
      };
    case EDIT_API_CATEGORY:
      return {
        ...state,
        apiCategories: [
          ...state.apiCategories.filter((v) => v.id !== action.payload.id),
          action.payload,
        ],
      };
    case EDIT_API_CATEGORIES:
      return { ...state, apiCategories: action.payload };
    default:
      return state;
  }
}
