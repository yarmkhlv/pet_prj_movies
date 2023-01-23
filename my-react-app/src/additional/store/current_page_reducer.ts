import { ACT_TYPES } from '../actions';
const defaultState = 1;

const currentPageReducer = (
  state = defaultState,
  action: { type: string; payload: object }
) => {
  switch (action.type) {
    case ACT_TYPES.UPD_CURRENT_PAGE:
      return action.payload;
    default:
      return state;
  }
};

export { currentPageReducer };
