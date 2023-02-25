import { useEffect, useState, useMemo } from 'react';
import { useSelector } from 'react-redux';
import MovieCard from './movie_card_/movie_card__';
import { Films } from '../../../../additional_/consts/films';
import './movie_list.css';
import { Store } from '../../../../additional_/store';
import { PER_PAGE } from '../../../../additional_/consts/other';
import { showMoviesPerPage } from '../../../../additional_/functions/show_movies_per_page';

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
