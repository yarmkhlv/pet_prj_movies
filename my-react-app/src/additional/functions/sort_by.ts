import { SELECTED_VALUE } from '../consts/other';
import { Films } from '../consts/films';

function sortBy(movies: Films[], sort: string) {
  switch (sort) {
    case SELECTED_VALUE.popularDescending:
      return movies.sort((a, b) => b.popularity - a.popularity);
    case SELECTED_VALUE.popularAscending:
      return movies.sort((a, b) => a.popularity - b.popularity);
    case SELECTED_VALUE.ratingDescending:
      return movies.sort((a, b) => b.vote_average - a.vote_average);
    case SELECTED_VALUE.ratingAscending:
      return movies.sort((a, b) => a.vote_average - b.vote_average);

    default:
      return movies;
  }
}

export { sortBy };
