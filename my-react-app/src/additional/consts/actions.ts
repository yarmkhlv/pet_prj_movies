import { actionCreator, actionResetCreator } from '../functions/action_creator';

const ACT_TYPES = {
  UPD_CURRENT_MOVIES: 'UPD_CURRENT_MOVIES',
  UPD_CURRENT_PAGE: 'UPD_CURRENT_PAGE',
  UPD_SELECTED_GENRES: 'UPD_SELECTED_GENRES',
  RESET_SELECTED_GENRES: ' RESET_SELECTED_GENRES',
  DELETE_UNSEL_GENRES: 'DELETE_UNSEL_GENRES',
  UPD_SORT: 'UPD_SORT',
  RESET_SORT: 'RESET_SORT',
  UPD_YEAR_FILTER: 'UPD_YEAR_FILTER',
  RESET_YEAR_FILTER: 'RESET_YEAR_FILTER',
  UPD_MODAL_ACTIVE: 'UPD_MODAL_ACTIVE',
  UPD_MOBILE_ACTIVE: 'UPD_MOBILE_ACTIVE',
  UPD_USER_AUTH: 'UPD_USER_AUTH',
  UPD_FAVOR_MOVIES: 'UPD_FAVOR_MOVIES',
  DELETE_FAVOR_MOVIES: 'DELETE_FAVOR_MOVIES',
  UPD_BOOKMARK_MOVIES: 'UPD_BOOKMARK_MOVIES',
  DELETE_BOOKMARK_MOVIES: 'DELETE_BOOKMARK_MOVIES',
  UPD_QUICK_FILTER: 'UPD_QUICK_FILTER',
  RESET_QUICK_FILTER: 'RESET_QUICK_FILTER',
  CLEAR_FAVOR_MOVIES: 'CLEAR_FAVOR_MOVIES',
  CLEAR_BOOKMARK_MOVIES: 'CLEAR_BOOKMARK_MOVIES',
};

const updCurrentMovies = actionCreator(ACT_TYPES.UPD_CURRENT_MOVIES);
const updCurrentPage = actionCreator(ACT_TYPES.UPD_CURRENT_PAGE);
const updSelectedGenres = actionCreator(ACT_TYPES.UPD_SELECTED_GENRES);
const deleteUnselGenres = actionCreator(ACT_TYPES.DELETE_UNSEL_GENRES);
const updSort = actionCreator(ACT_TYPES.UPD_SORT);
const updYearFilter = actionCreator(ACT_TYPES.UPD_YEAR_FILTER);
const updModalActive = actionCreator(ACT_TYPES.UPD_MODAL_ACTIVE);
const updMobileActive = actionCreator(ACT_TYPES.UPD_MOBILE_ACTIVE);
const updUserAuth = actionCreator(ACT_TYPES.UPD_USER_AUTH);
const updFavorMovies = actionCreator(ACT_TYPES.UPD_FAVOR_MOVIES);
const updBookmarkMovies = actionCreator(ACT_TYPES.UPD_BOOKMARK_MOVIES);
const deleteFavorMovies = actionCreator(ACT_TYPES.DELETE_FAVOR_MOVIES);
const deleteBookmarkMovies = actionCreator(ACT_TYPES.DELETE_BOOKMARK_MOVIES);
const updQuickFilter = actionCreator(ACT_TYPES.UPD_QUICK_FILTER);

const resetSelectedGenres = actionResetCreator(ACT_TYPES.RESET_SELECTED_GENRES);
const resetSort = actionResetCreator(ACT_TYPES.RESET_SORT);
const resetYearFilter = actionResetCreator(ACT_TYPES.RESET_YEAR_FILTER);
const resetQuickFilter = actionResetCreator(ACT_TYPES.RESET_QUICK_FILTER);
const clearFavorMovies = actionResetCreator(ACT_TYPES.CLEAR_FAVOR_MOVIES);
const clearBookmarkMovies = actionResetCreator(ACT_TYPES.CLEAR_BOOKMARK_MOVIES);

export {
  ACT_TYPES,
  updCurrentMovies,
  updCurrentPage,
  updSelectedGenres,
  resetSelectedGenres,
  deleteUnselGenres,
  updSort,
  resetSort,
  updYearFilter,
  resetYearFilter,
  updModalActive,
  updMobileActive,
  updUserAuth,
  updBookmarkMovies,
  updFavorMovies,
  deleteBookmarkMovies,
  deleteFavorMovies,
  updQuickFilter,
  resetQuickFilter,
  clearFavorMovies,
  clearBookmarkMovies,
};
