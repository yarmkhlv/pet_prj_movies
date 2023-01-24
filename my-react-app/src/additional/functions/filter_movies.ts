import { films, Films } from '../consts/films';
import { filterByYear } from './filter_by_year';
import { filterByGenre } from './filter_by_genre';
import { SELECTED_QUICK } from '../consts/other';
import { sortBy } from './sort_by';

const filterMovies = (
  movies: Films[],
  year: string,
  genres: number[],
  sort: string,
  quick: string,
  quickFavorite: Films[],
  quickPostpone: Films[]
) => {
  if (quick !== SELECTED_QUICK.choose) {
    const quickMovies =
      quick === SELECTED_QUICK.favorite ? quickFavorite : quickPostpone;
    const filteredYear = filterByYear(quickMovies, year);
    const filteredGenreYear = filterByGenre(filteredYear, genres);
    const sortedFiltred = sortBy(filteredGenreYear, sort);
    return sortedFiltred;
  }
  if (movies.length < 1) {
    const filteredYear = filterByYear(films, year);
    const filteredGenreYear = filterByGenre(filteredYear, genres);
    const sortedFiltred = sortBy(filteredGenreYear, sort);
    return sortedFiltred;
  }
  const filteredYear = filterByYear(movies, year);
  const filteredGenreYear = filterByGenre(filteredYear, genres);
  const sortedFiltred = sortBy(filteredGenreYear, sort);
  return sortedFiltred;
};

export { filterMovies };
