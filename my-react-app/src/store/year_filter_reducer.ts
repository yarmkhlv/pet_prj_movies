import { SELECTED_YEAR } from '../helpers/consts/other';
import { ACT_TYPES } from '../helpers/consts/actions';

const defaultState = SELECTED_YEAR.any;

const yearFilterReducer = (
  state = defaultState,
  action: { type: string; payload: string }
) => {
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
