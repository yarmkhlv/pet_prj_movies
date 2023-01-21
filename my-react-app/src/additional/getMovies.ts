import { Films } from './films';
import { SELECTED_VALUE, SELECTED_YEAR } from './consts';

const getYear = (date: string) => new Date(date).getFullYear();

const getMovies = (
  arr: Films[],
  page: number,
  sort: string,
  filt: string,
  perPage: number
) => {
  const sortedArr: Films[] = (function sorting() {
    switch (sort) {
      case SELECTED_VALUE.popularDescending:
        return arr.sort((a, b) => b.popularity - a.popularity);
      case SELECTED_VALUE.popularAscending:
        return arr.sort((a, b) => a.popularity - b.popularity);
      case SELECTED_VALUE.ratingDescending:
        return arr.sort((a, b) => b.vote_average - a.vote_average);
      case SELECTED_VALUE.ratingAscending:
        return arr.sort((a, b) => a.vote_average - b.vote_average);

      default:
        return arr;
    }
  })();

  const sortedAndFiltred: Films[] = (function filtration() {
    if (filt !== SELECTED_YEAR.any) {
      return sortedArr.filter(
        (movie: Films) => getYear(movie.release_date) === Number(filt)
      );
    }
    return sortedArr;
  })();

  const forPage: Films[] = (function cutting() {
    if (page === 1) {
      return sortedAndFiltred.slice(0, perPage);
    }
    return sortedAndFiltred.slice((page - 1) * perPage, page * perPage);
  })();
  return {
    sortedAndFiltred,
    forPage,
  };
};

export default getMovies;
