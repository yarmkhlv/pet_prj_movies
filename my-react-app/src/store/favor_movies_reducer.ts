import { ACT_TYPES } from '../additional/consts/actions';
import { Films } from '../additional/consts/films';
import { tryToGetLocalArr } from '../additional/functions/try_to_get_local';

const defaultState: Films[] = tryToGetLocalArr('FavoriteMovies');

const favorMoviesReducer = (
  state = defaultState,
  action: { type: string; payload: Films }
) => {
  switch (action.type) {
    case ACT_TYPES.UPD_FAVOR_MOVIES:
      return [...state, action.payload];
    case ACT_TYPES.DELETE_FAVOR_MOVIES:
      return state.filter((movie) => movie.id !== action.payload.id);
    case ACT_TYPES.CLEAR_FAVOR_MOVIES:
      return [];
    default:
      return state;
  }
};

export { favorMoviesReducer };
