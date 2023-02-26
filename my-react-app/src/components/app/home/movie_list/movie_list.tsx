import { useEffect, useState, useMemo } from 'react';
import { useSelector } from 'react-redux';
import MovieCard from './movie_card/movie_card';
import { Films } from '../../../../additional/consts/films';
import './movie_list.css';
import { Store } from '../../../../store';
import { PER_PAGE } from '../../../../additional/consts/other';
import { showMoviesPerPage } from '../../../../additional/functions/show_movies_per_page';

function MovieList() {
  const { currentMovies, currentPage } = useSelector((store: Store) => store);

  const [moviesPerPage, setMoviesPerPage] = useState(
    showMoviesPerPage(currentMovies, currentPage, PER_PAGE)
  );

  useEffect(() => {
    setMoviesPerPage(showMoviesPerPage(currentMovies, currentPage, PER_PAGE));
  }, [currentPage, currentMovies]);

  const renderMovieCards = useMemo(
    () =>
      moviesPerPage.map((movie: Films) => (
        <MovieCard movie={movie} key={movie.id} />
      )),
    [moviesPerPage]
  );

  return <div className="movieList">{renderMovieCards}</div>;
}

export default MovieList;
