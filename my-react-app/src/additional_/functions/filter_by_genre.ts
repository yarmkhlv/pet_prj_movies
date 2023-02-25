import { Films } from '../consts/films';

function filterByGenre(movies: Films[], genres: number[]) {
  if (genres.length > 0) {
    return movies.filter((movie) =>
      movie.genre_ids.some((genreId) => genres.includes(genreId))
    );
  }
  return movies;
}

export { filterByGenre };
