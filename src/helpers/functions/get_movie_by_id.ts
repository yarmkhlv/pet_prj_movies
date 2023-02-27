import { Films } from '../consts/films';

function getMovieById(arr: Films[], id: number) {
  return arr.find((element: Films) => element.id === id);
}

export { getMovieById };
