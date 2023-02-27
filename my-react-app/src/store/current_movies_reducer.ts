/* eslint-disable @typescript-eslint/default-param-last */
import { films, Films } from '../helpers/consts/films';
import { ACT_TYPES } from '../helpers/consts/actions';

const defaultState: Films[] = films;

const currentMoviesReducer = (
  state = defaultState,
  action: { type: string; payload: [] }
) => {
  switch (action.type) {
    case ACT_TYPES.UPD_CURRENT_MOVIES:
      return [...action.payload];
    default:
      return state;
  }
};

export { currentMoviesReducer };
