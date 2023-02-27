import { ACT_TYPES } from '../helpers/consts/actions';
import { Films } from '../helpers/consts/films';
import { tryToGetLocalArr } from '../helpers/functions/try_to_get_local';

const defaultState: Films[] = tryToGetLocalArr('BookmarkMovies');

const bookmarkMoviesReducer = (
  state = defaultState,
  action: { type: string; payload: Films }
) => {
  switch (action.type) {
    case ACT_TYPES.UPD_BOOKMARK_MOVIES:
      return [...state, action.payload];
    case ACT_TYPES.DELETE_BOOKMARK_MOVIES:
      return state.filter((movie) => movie.id !== action.payload.id);
    case ACT_TYPES.CLEAR_BOOKMARK_MOVIES:
      return [];
    default:
      return state;
  }
};

export { bookmarkMoviesReducer };
