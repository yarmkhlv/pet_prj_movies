import { genres, Genre } from '../consts/other';

const getIdFromGenres = (name: string) => {
  const findedGenre = genres.find((genre: Genre) => genre.name === name);
  if (findedGenre) return findedGenre.id;
  return null;
};
export default getIdFromGenres;
