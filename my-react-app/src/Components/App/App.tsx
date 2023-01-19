import { useEffect, useState } from 'react';
import Header from './Header/Header';
import MovieList from './MovieList/MovieList';
import Sidebar from './Sidebar/Sidebar';
import './App.css';
import films from '../../additional/films';
import getMovies from '../../additional/getMovies';

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentMovies, setCurrentMovies] = useState(getMovies(films, 0));
  useEffect(() => {
    setCurrentMovies(getMovies(films, currentPage));
  }, [currentPage]);
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <MovieList currentMovies={currentMovies} />
      </main>
    </div>
  );
}

export default App;
