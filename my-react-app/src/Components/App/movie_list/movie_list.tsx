import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import MovieCard from './movie_card/movie_card';
import { Films } from '../../../additional/consts/films';
import './movie_list.css';
import { Store } from '../../../additional/store';
import { PER_PAGE } from '../../../additional/consts/other';
import { showMoviesPerPage } from '../../../additional/functions/show_movies_per_page';

function MovieList() {
  const { currentMovies, currentPage } = useSelector((store: Store) => store);

  const boundMoviesPerPage = () =>
    showMoviesPerPage(currentMovies, currentPage, PER_PAGE);

  const [moviesPerPage, setMoviesPerPage] = useState(boundMoviesPerPage());

  useEffect(() => {
    setMoviesPerPage(boundMoviesPerPage());
  }, [currentPage, currentMovies]);

  const renderMovieCards = moviesPerPage.map((movie: Films) => (
    <MovieCard movie={movie} key={movie.id} />
  ));

  return <div className="movieList">{renderMovieCards}</div>;
}

export default MovieList;
