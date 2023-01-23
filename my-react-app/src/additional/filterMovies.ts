import { Films } from './films';
import { filterByYear } from './functions/filter_by_year';
import { filterByGenre } from './functions/filter_by_genre';

const filterMovies = (movies: Films[], year: string, genres: number[]) => {
  const filteredYear = filterByYear(movies, year);
  const filteredGenreYear = filterByGenre(filteredYear, genres);
  return filteredGenreYear;
};

export { filterMovies };
