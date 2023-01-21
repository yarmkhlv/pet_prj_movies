import { Films } from './films';
import { SELECTED_VALUE, SELECTED_YEAR } from './consts';

const getYear = (date: string) => new Date(date).getFullYear();

const getMovies = (
  arr: Films[],
  page: number,
  sort: string,
  filt: string,
  check: number[],
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

  const sortedFiltred: Films[] = (function filtration() {
    if (filt !== SELECTED_YEAR.any) {
      return sortedArr.filter(
        (movie: Films) => getYear(movie.release_date) === Number(filt)
      );
    }
    return sortedArr;
  })();
  const sortedFiltredChecked = (function checking() {
    if (check.length > 0) {
      return sortedFiltred.filter((movie) =>
        movie.genre_ids.some((genreId) => check.includes(genreId))
      );
    }
    return sortedFiltred;
  })();
  const forPage: Films[] = (function cutting() {
    if (page === 1) {
      return sortedFiltredChecked.slice(0, perPage);
    }
    return sortedFiltredChecked.slice((page - 1) * perPage, page * perPage);
  })();
  return {
    sortedFiltredChecked,
    forPage,
  };
};

export default getMovies;
