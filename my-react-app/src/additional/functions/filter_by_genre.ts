import { Films } from '../films';

function filterByGenre(arr: Films[], genres: number[]) {
  if (genres.length > 0) {
    return arr.filter((movie) =>
      movie.genre_ids.some((genreId) => genres.includes(genreId))
    );
  }
  return arr;
}

export { filterByGenre };
