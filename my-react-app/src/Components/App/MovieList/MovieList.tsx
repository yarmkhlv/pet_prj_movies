import MovieCard from "./MovieCard/MovieCard";
import "./MovieList.css";

function MovieList() {
  return (
    <div className="movieList">
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
    </div>
  );
}

export default MovieList;
