import { useEffect, useState } from 'react';
import Header from './header/Header';
import MovieList from './movieList/MovieList';
import './App.css';
import Sidebar from './sidebar/Sidebar';
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
          setCurrentChecked={setCurrentChecked}
          filtredMovies={currentMovies.sortedFiltredChecked}
          addGenreId={addGenreId}
          currentSort={currentSort}
          currentFilter={currentFilter}
          currentChecked={currentChecked}
        />
        <MovieList moviesForPage={currentMovies.forPage} />
      </main>
    </div>
  );
}

export default App;
