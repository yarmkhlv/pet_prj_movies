import { legacy_createStore as createStore, combineReducers } from 'redux';
import { currentMoviesReducer } from './current_movies_reducer';
import { currentPageReducer } from './current_page_reducer';
import { selectedGenresReducer } from './selected_genres_reducer';
import { yearFilterReducer } from './year_filter_reducer';
import { sortReducer } from './sort_reducer';
import { Films } from '../films';

type Store = {
  currentMovies: Films[];
  currentPage: number;
  selectedGenres: number[];
  yearFilter: string;
  genreFilter: string;
  sort: string;
};

const rootReducer = combineReducers({
  currentMovies: currentMoviesReducer,
  currentPage: currentPageReducer,
  selectedGenres: selectedGenresReducer,
  yearFilter: yearFilterReducer,
  sort: sortReducer,
});

const store = createStore(rootReducer);

console.log(store.getState());

export { store };
export type { Store };
