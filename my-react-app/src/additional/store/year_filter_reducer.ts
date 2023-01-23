import { SELECTED_YEAR } from '../consts';
import { ACT_TYPES } from '../actions';

const defaultState = SELECTED_YEAR.any;

const yearFilterReducer = (
  state = defaultState,
  action: { type: string; payload: string }
) => {
  console.log(state);
  switch (action.type) {
    case ACT_TYPES.UPD_YEAR_FILTER:
      return action.payload;
    case ACT_TYPES.RESET_YEAR_FILTER:
      return defaultState;
    default:
      return state;
  }
};

export { yearFilterReducer };
