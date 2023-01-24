import { SELECTED_YEAR } from '../consts/other';
import { Films } from '../consts/films';

const getYear = (date: string) => new Date(date).getFullYear();

function filterByYear(movies: Films[], year: string) {
  if (year !== SELECTED_YEAR.any) {
    return movies.filter(
      (movie: Films) => getYear(movie.release_date) === Number(year)
    );
  }
  return movies;
}

export { filterByYear };
