import MovieCard from './MovieCard/MovieCard';
import { Films } from '../../../additional/films';
import './MovieList.css';

function MovieList(props: { currentMovies: Films[] }) {
  const { currentMovies } = props;
  const renderMovieCards = currentMovies.map((obj: Films) => (
    <MovieCard
      rating={obj.vote_average}
      title={obj.title}
      key={obj.id}
      path={obj.poster_path}
      backdropPath={obj.backdrop_path}
    />
  ));

  return <div className="movieList">{renderMovieCards}</div>;
}

export default MovieList;
