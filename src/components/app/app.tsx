import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { Store } from '../../store';
import { Header } from './header/header';
import { Home } from './home/home';
import { MovieDetails } from './movie_details/movie_details';
import { updCurrentMovies } from '../../helpers/consts/actions';
import { filterMovies } from '../../helpers/functions/filter_movies';
import { films } from '../../helpers/consts/films';
import { sortBy } from '../../helpers/functions/sort_by';
import { Modal } from './modal/modal';
import { Search } from './search/search';

function App() {
  const {
    currentMovies,
    sort,
    yearFilter,
    quickFilter,
    selectedGenres,
    modalActive,
    favorMovies,
    bookmarkMovies,
  } = useSelector((store: Store) => store);
  const dispatch = useDispatch();

  const boundFilterCurrentMovies = () =>
    dispatch(
      updCurrentMovies(
        filterMovies(
          films,
          yearFilter,
          selectedGenres,
          sort,
          quickFilter,
          favorMovies,
          bookmarkMovies
        )
      )
    );

  const boundSortCurrentMovies = () =>
    dispatch(updCurrentMovies(sortBy(currentMovies, sort)));

  useEffect(() => {
    boundSortCurrentMovies();
  }, [sort]);

  useEffect(() => {
    boundFilterCurrentMovies();
  }, [selectedGenres, yearFilter, quickFilter]);

  useEffect(() => {
    localStorage.setItem('FavoriteMovies', JSON.stringify(favorMovies));
  }, [favorMovies]);

  useEffect(() => {
    localStorage.setItem('BookmarkMovies', JSON.stringify(bookmarkMovies));
  }, [bookmarkMovies]);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/movie-details/:movieId" element={<MovieDetails />} />
        <Route path="/search" element={<Search />} />
      </Routes>
      {modalActive ? <Modal /> : null}
    </div>
  );
}

export default App;
