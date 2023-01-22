import { Films } from './films';
import { sortBy } from './functions/sort_by';
import { filterByYear } from './functions/filter_by_year';
import { filterByGenre } from './functions/filter_by_genre';
import { showMoviesPerPage } from './functions/show_movies_per_page';

const getMovies = (
  arr: Films[],
  page: number,
  sort: string,
  filt: string,
  check: number[],
  perPage: number
) => {
  const sortedArr: Films[] = sortBy(arr, sort);

  const sortedFiltred: Films[] = filterByYear(sortedArr, filt);

  const sortedFiltredChecked = filterByGenre(sortedFiltred, check);

  const forPage: Films[] = showMoviesPerPage(
    sortedFiltredChecked,
    page,
    perPage
  );
  return {
    sortedFiltredChecked,
    forPage,
  };
};

export default getMovies;
