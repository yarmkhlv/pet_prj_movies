import { Films } from '../consts/films';
import { filterByYear } from './filter_by_year';
import { filterByGenre } from './filter_by_genre';

const filterMovies = (movies: Films[], year: string, genres: number[]) => {
  const filteredYear = filterByYear(movies, year);
  const filteredGenreYear = filterByGenre(filteredYear, genres);
  return filteredGenreYear;
};

export { filterMovies };
