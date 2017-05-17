import { ADD_ENTRIES, ADD_ENTRY, CHANGE_PAGE, FIRE_SEARCH } from '../actions/AppActions';

// Initial State
export const initialState = {
  search: '',
  activePage: 2,
  data: [],
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {

    case ADD_ENTRY :
      return {
        data: [action.entry, ...state.data],
        activePage: state.activePage,
        search: state.search,
      };

    case ADD_ENTRIES :
      return {
        data: action.entries,
        activePage: state.activePage,
        search: state.search,
      };

    case CHANGE_PAGE :
      return Object.assign({}, state, { activePage: action.activePage });

    case FIRE_SEARCH :
      return Object.assign({}, state, { search: action.search });

    default:
      return state;

  }
};

/* Selectors */

// Get List
export const getList = state => state.app.data;

// Get item by id
export const getItem = (state, id) => state.app.data.filter(
  item => parseInt(item.id, 10) === parseInt(id, 10)
)[0];

// Get active page
export const getActivePage = state => state.app.activePage;

// Get the search
export const getSearchString = state => state.app.search;

// Export Reducer
export default AppReducer;
