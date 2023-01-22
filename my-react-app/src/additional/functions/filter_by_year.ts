import { SELECTED_YEAR } from '../consts';
import { Films } from '../films';

const getYear = (date: string) => new Date(date).getFullYear();

function filterByYear(arr: Films[], filter: string) {
  if (filter !== SELECTED_YEAR.any) {
    return arr.filter(
      (movie: Films) => getYear(movie.release_date) === Number(filter)
    );
  }
  return arr;
}

export { filterByYear };
