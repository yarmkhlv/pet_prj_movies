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
};

const updCurrentMovies = actionCreator(ACT_TYPES.UPD_CURRENT_MOVIES);
const updCurrentPage = actionCreator(ACT_TYPES.UPD_CURRENT_PAGE);
const updSelectedGenres = actionCreator(ACT_TYPES.UPD_SELECTED_GENRES);
const deleteUnselGenres = actionCreator(ACT_TYPES.DELETE_UNSEL_GENRES);
const updSort = actionCreator(ACT_TYPES.UPD_SORT);
const updYearFilter = actionCreator(ACT_TYPES.UPD_YEAR_FILTER);

const resetSelectedGenres = actionResetCreator(ACT_TYPES.RESET_SELECTED_GENRES);
const resetSort = actionResetCreator(ACT_TYPES.RESET_SORT);
const resetYearFilter = actionResetCreator(ACT_TYPES.RESET_YEAR_FILTER);

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
};
