import { legacy_createStore as createStore, combineReducers } from 'redux';

const rootReducer = combineReducers({});

const store = createStore(rootReducer);

export { store };
