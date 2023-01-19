import { Films } from './films';

const getMovies = (arr: Films[], page: number) => {
  if (page === 1) {
    return arr.slice(page - 1, page + 9);
  }
  return arr.slice((page - 1) * 10, page * 10);
};

export default getMovies;
