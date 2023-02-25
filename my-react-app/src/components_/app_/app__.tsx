import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { Store } from '../../additional_/store';
import Header from './header_/header__';
import './app.css';
import { Home } from './home_/home__';
import { MovieDetails } from './movie_details_/movie_details__';
import { updCurrentMovies } from '../../additional_/consts/actions';
import { filterMovies } from '../../additional_/functions/filter_movies';
import { films } from '../../additional_/consts/films';
import { sortBy } from '../../additional_/functions/sort_by';
import { Modal } from './modal_/modal__';
import { Search } from './search_/search__';

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
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie-details/:movieId" element={<MovieDetails />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </main>
      {modalActive ? <Modal /> : null}
    </div>
  );
}

export default App;
