import callApi from '../api/apiCaller';
import config from '../../server/config';

export const ADD_ENTRY = 'ADD_ENTRY';
export const ADD_ENTRIES = 'ADD_ENTRIES';
export const CHANGE_PAGE = 'CHANGE_PAGE';
export const FIRE_SEARCH = 'FIRE_SEARCH';

export function addEntry(entry) {
  return {
    type: ADD_ENTRY,
    entry,
  };
}

export function addEntries(entries) {
  return {
    type: ADD_ENTRIES,
    entries,
  };
}

export function changePage(activePage) {
  return {
    type: CHANGE_PAGE,
    activePage,
  };
}

//Responsável por mudar o conteúdo de search
export function fireSearch(search) {
  return {
    type: FIRE_SEARCH,
    search,
  };
}

export function fetchList(page = 1, perpage = config.ITEMS_PER_PAGE) {
  return (dispatch) => {
    return callApi(0, 0, page, perpage)
    .then((res) => {
      dispatch(addEntries(res));
      dispatch(changePage(page));
    });
  };
}

export function fetchItem(id) {
  return (dispatch) => {
    return callApi(id, 0)
    .then((res) => {
      dispatch(addEntry(res[0]));
    });
  };
}

export function fetchSearchList(search, page = 1, perpage = config.ITEMS_PER_PAGE) {
  return (dispatch) => {
    return callApi(search, 1, page, perpage)
    .then((res) => {
      dispatch(addEntries(res));
      dispatch(fireSearch(search));
      dispatch(changePage(page));
    });
  };
}
