/* eslint-disable @typescript-eslint/default-param-last */
import { films, Films } from '../films';

const defaultState: Films[] = films;

const currentMoviesReducer = (state = defaultState, action: () => void) => {};
