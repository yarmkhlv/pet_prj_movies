import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Store } from '../../additional/store';
import Header from './header/header';
import MovieList from './movie_list/movie_list';
import './App.css';
import Sidebar from './sidebar/sidebar';
import { updCurrentMovies } from '../../additional/actions';
import { filterMovies } from '../../additional/filterMovies';
import { films } from '../../additional/films';
import { sortBy } from '../../additional/functions/sort_by';

function App() {
  const { currentMovies, sort, yearFilter, selectedGenres } = useSelector(
    (store: Store) => store
  );
  const dispatch = useDispatch();

  const boundFilterCurrentMovies = () =>
    dispatch(updCurrentMovies(filterMovies(films, yearFilter, selectedGenres)));

  const boundSortCurrentMovies = () =>
    dispatch(updCurrentMovies(sortBy(currentMovies, sort)));

  useEffect(() => {
    boundSortCurrentMovies();
  }, [sort]);

  useEffect(() => {
    boundFilterCurrentMovies();
  }, [selectedGenres, yearFilter]);

  return (
    <div className="App">
      <Header />
      <main className="main">
        <Sidebar />
        <MovieList />
      </main>
    </div>
  );
}

export default App;
