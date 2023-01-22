import { SELECTED_VALUE } from '../consts';
import { Films } from '../films';

function sortBy(arr: Films[], sort: string) {
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
}

export { sortBy };
