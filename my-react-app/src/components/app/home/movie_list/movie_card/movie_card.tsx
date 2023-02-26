import './movie_card.css';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Films } from '../../../../../additional/consts/films';
import {
  updFavorMovies,
  updBookmarkMovies,
  deleteBookmarkMovies,
  deleteFavorMovies,
  updModalActive,
} from '../../../../../additional/consts/actions';
import { Store } from '../../../../../store';

function MovieCard(props: { movie: Films }) {
  const { movie } = props;
  const dispatch = useDispatch();

  const { favorMovies, bookmarkMovies, userAuth } = useSelector(
    (store: Store) => store
  );

  const favorHasMovie = favorMovies.some((elem) => elem.id === movie.id);
  const bookmarkHasMovie = bookmarkMovies.some((elem) => elem.id === movie.id);

  const imagePath = `https://image.tmdb.org/t/p/w500/${
    movie.poster_path || movie.backdrop_path
  }`;

  const boundFavorite = () => {
    if (userAuth) {
      if (favorHasMovie) {
        dispatch(deleteFavorMovies(movie));
      } else {
        dispatch(updFavorMovies(movie));
      }
    } else dispatch(updModalActive(true));
  };

  const boundBookmark = () => {
    if (userAuth) {
      if (bookmarkHasMovie) {
        dispatch(deleteBookmarkMovies(movie));
      } else {
        dispatch(updBookmarkMovies(movie));
      }
    } else dispatch(updModalActive(true));
  };

  const favoriteBtnClasses = favorHasMovie ? 'favotires-colored' : '';
  const postponeBtnClasses = bookmarkHasMovie ? 'postpone-colored' : '';

  return (
    <div className="movieCard">
      <div className="movieCard__poster">
        <img className="movieCard__poster-img" src={imagePath} alt="poster" />
        <div className="movieCard__poster-rating">
          <p>{movie.vote_average}</p>
        </div>
        <div className="movieCard__poster-btns">
          <button
            onClick={boundFavorite}
            type="button"
            className={`poster-btns__favorites ${favoriteBtnClasses}`}
            aria-label="Add to favourites"
          />
          <button
            onClick={boundBookmark}
            type="button"
            className={`poster-btns__postpone ${postponeBtnClasses}`}
            aria-label="Add to postpones"
          />
        </div>
        <div className="movieCard__poster-title">{movie.title}</div>
        <div className="movieCard__poster__cont-link">
          <NavLink
            className="movieCard__poster__link"
            to={`/movie-details/${movie.id}`}
          >
            Подробнее
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
