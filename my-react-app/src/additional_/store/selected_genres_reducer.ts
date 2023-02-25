import { ACT_TYPES } from '../consts/actions';

const defaultState: number[] = [];

const selectedGenresReducer = (
  state = defaultState,
  action: { type: string; payload: number | [] }
) => {
  switch (action.type) {
    case ACT_TYPES.UPD_SELECTED_GENRES:
      return [...state, action.payload];
    case ACT_TYPES.DELETE_UNSEL_GENRES:
      return action.payload;
    case ACT_TYPES.RESET_SELECTED_GENRES:
      return defaultState;
    default:
      return state;
  }
};

export { selectedGenresReducer };
