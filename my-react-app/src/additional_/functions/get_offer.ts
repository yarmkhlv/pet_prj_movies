import MovieList from '../../components_/app_/home_/movie_list_/movie_list__';
import { Films } from '../consts/films';

function getOffer(
  arr: Films[],
  genre: string,
  rating: string,
  popularity: string
) {
  let movies = arr;

  if (Number(genre) !== 0) {
    movies = arr.filter((element) =>
      element.genre_ids.some((id) => id === Number(genre))
    );
  }
  if (rating === 'high') {
    movies = movies.filter((element) => element.vote_average > 5);
  }
  if (rating === 'low') {
    movies = movies.filter((element) => element.vote_average <= 5);
  }
  if (popularity === 'popular') {
    movies = movies.filter(
      (element) => element.popularity > 100 && element.vote_count > 200
    );
  }
  if (popularity === 'unknown') {
    movies = movies.filter(
      (element) => element.popularity <= 100 || element.vote_count <= 200
    );
  }
  return movies;
}

export { getOffer };
