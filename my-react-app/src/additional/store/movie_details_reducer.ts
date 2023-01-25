import { ACT_TYPES } from '../consts/actions';
import { Films } from '../consts/films';

const defaultState = null;

const movieDetailsReducer = (
  state = defaultState,
  action: { type: string; payload: Films }
) => {
  switch (action.type) {
    case ACT_TYPES.UPD_MOVIE_DETAILS:
      return action.payload;
    default:
      return state;
  }
};

export { movieDetailsReducer };
