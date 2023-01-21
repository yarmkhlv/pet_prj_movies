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
import getIdFromGenres from '../../additional/getIdFromGenres';

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentSort, setCurrentSort] = useState(
    SELECTED_VALUE.popularDescending
  );
  const [currentFilter, setCurrentFilter] = useState(SELECTED_YEAR.any);
  const [currentChecked, setCurrentChecked] = useState<number[]>([]);
  const [currentMovies, setCurrentMovies] = useState(
    getMovies(films, 0, currentSort, currentFilter, currentChecked, PER_PAGE)
  );
  const addGenreId = (name: string) => {
    const id: number | null = getIdFromGenres(name);
    if (id) {
      if (currentChecked.find((genreId) => genreId === id)) {
        const filteredArr = currentChecked.filter((genreId) => genreId !== id);
        setCurrentChecked([...filteredArr]);
      } else setCurrentChecked([...currentChecked, id]);
    }
  };
  useEffect(() => {
    setCurrentMovies(
      getMovies(
        films,
        currentPage,
        currentSort,
        currentFilter,
        currentChecked,
        PER_PAGE
      )
    );
  }, [currentFilter, currentPage, currentSort, currentChecked]);
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Sidebar
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          setCurrentSort={setCurrentSort}
          setCurrentFilter={setCurrentFilter}
          filtredMovies={currentMovies.sortedFiltredChecked}
          addGenreId={addGenreId}
        />
        <MovieList moviesForPage={currentMovies.forPage} />
      </main>
    </div>
  );
}

export default App;
