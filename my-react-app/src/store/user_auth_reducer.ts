import { ACT_TYPES } from '../additional/consts/actions';
import { tryToGetLocalUser } from '../additional/functions/try_to_get_local';

const defaultState = tryToGetLocalUser('user');

const userAuthReducer = (
  state = defaultState,
  action: { type: string; payload: boolean }
) => {
  switch (action.type) {
    case ACT_TYPES.UPD_USER_AUTH:
      return action.payload;
    default:
      return state;
  }
};

export { userAuthReducer };