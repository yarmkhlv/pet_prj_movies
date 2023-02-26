import { ACT_TYPES } from '../additional/consts/actions';

const defaultState = false;

const modalActiveReducer = (
  state = defaultState,
  action: { type: string; payload: boolean }
) => {
  switch (action.type) {
    case ACT_TYPES.UPD_MODAL_ACTIVE:
      return action.payload;
    default:
      return state;
  }
};

export { modalActiveReducer };
