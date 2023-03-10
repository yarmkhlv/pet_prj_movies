import { legacy_createStore as createStore, combineReducers } from 'redux';
import { currentMoviesReducer } from './current_movies_reducer';
import { currentPageReducer } from './current_page_reducer';
import { selectedGenresReducer } from './selected_genres_reducer';
import { yearFilterReducer } from './year_filter_reducer';
import { sortReducer } from './sort_reducer';
import { modalActiveReducer } from './modal_active_reducer';
import { mobileActiveReducer } from './mobile_active_reducer';
import { Films } from '../helpers/consts/films';
import { userAuthReducer } from './user_auth_reducer';
import { favorMoviesReducer } from './favor_movies_reducer';
import { bookmarkMoviesReducer } from './bookmark_movies_reducer';
import { quickFilterReducer } from './quick_filter_reducer';

type Store = {
  currentMovies: Films[];
  currentPage: number;
  selectedGenres: number[];
  yearFilter: string;
  quickFilter: string;
  sort: string;
  modalActive: boolean;
  mobileActive: boolean;
  userAuth: boolean;
  favorMovies: Films[];
  bookmarkMovies: Films[];
};

const rootReducer = combineReducers({
  currentMovies: currentMoviesReducer,
  currentPage: currentPageReducer,
  selectedGenres: selectedGenresReducer,
  yearFilter: yearFilterReducer,
  quickFilter: quickFilterReducer,
  sort: sortReducer,
  modalActive: modalActiveReducer,
  mobileActive: mobileActiveReducer,
  userAuth: userAuthReducer,
  favorMovies: favorMoviesReducer,
  bookmarkMovies: bookmarkMoviesReducer,
});

const store = createStore(rootReducer);

export { store };
export type { Store };
