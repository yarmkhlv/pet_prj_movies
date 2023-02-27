import { Films } from '../consts/films';

function showMoviesPerPage(
  arr: Films[],
  currentPage: number,
  valuePerPage: number
) {
  if (currentPage === 1) {
    return arr.slice(0, valuePerPage);
  }
  return arr.slice(
    (currentPage - 1) * valuePerPage,
    currentPage * valuePerPage
  );
}

export { showMoviesPerPage };
