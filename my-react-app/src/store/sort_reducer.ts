import { SELECTED_VALUE } from '../helpers/consts/other';
import { ACT_TYPES } from '../helpers/consts/actions';

const defaultState = SELECTED_VALUE.popularDescending;

const sortReducer = (
  state = defaultState,
  action: { type: string; payload: string }
) => {
  switch (action.type) {
    case ACT_TYPES.UPD_SORT:
      return action.payload;
    case ACT_TYPES.RESET_SORT:
      return defaultState;
    default:
      return state;
  }
};

export { sortReducer };
