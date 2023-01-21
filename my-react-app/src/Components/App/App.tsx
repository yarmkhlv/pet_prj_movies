import React, { useEffect, useState } from 'react';
import Header from './Header/Header';
import MovieList from './MovieList/MovieList';
import Sidebar from './Sidebar/Sidebar';
import './App.css';
import films from '../../additional/films';
import getMovies from '../../additional/getMovies';
import {
  SELECTED_VALUE,
  SELECTED_YEAR,
  PER_PAGE,
} from '../../additional/consts';

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentSort, setCurrentSort] = useState(
    SELECTED_VALUE.popularDescending
  );
  const [currentFilter, setCurrentFilter] = useState(SELECTED_YEAR.any);
  const [currentMovies, setCurrentMovies] = useState(
    getMovies(films, 0, currentSort, currentFilter, PER_PAGE)
  );
  useEffect(() => {
    setCurrentMovies(
      getMovies(films, currentPage, currentSort, currentFilter, PER_PAGE)
    );
  }, [currentFilter, currentPage, currentSort]);
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Sidebar
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          setCurrentSort={setCurrentSort}
          setCurrentFilter={setCurrentFilter}
          filtredMovies={currentMovies.sortedAndFiltred}
        />
        <MovieList moviesForPage={currentMovies.forPage} />
      </main>
    </div>
  );
}

export default App;
