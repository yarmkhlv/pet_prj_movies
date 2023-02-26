import { SELECTED_QUICK } from '../additional/consts/other';
import { ACT_TYPES } from '../additional/consts/actions';

const defaultState = SELECTED_QUICK.choose;

const quickFilterReducer = (
  state = defaultState,
  action: { type: string; payload: string }
) => {
  switch (action.type) {
    case ACT_TYPES.UPD_QUICK_FILTER:
      return action.payload;
    case ACT_TYPES.RESET_QUICK_FILTER:
      return defaultState;
    default:
      return state;
  }
};

export { quickFilterReducer };
