import MovieCard from './MovieCard/MovieCard';
import movies, { Movie } from '../../../additional/const';
import './MovieList.css';

function MovieList() {
  const renderMovieCards = movies.map((obj: Movie) => (
    <MovieCard
      rating={obj.vote_average}
      title={obj.title}
      key={obj.id}
      path={obj.poster_path}
    />
  ));

  return <div className="movieList">{renderMovieCards}</div>;
}

export default MovieList;
