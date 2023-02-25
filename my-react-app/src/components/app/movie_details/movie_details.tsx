import { useParams } from 'react-router-dom';
import { getMovieById } from '../../../additional/functions/get_movie_by_id';
import { films } from '../../../additional/consts/films';
import './movie_details.css';

function MovieDetails() {
  const { movieId } = useParams();
  const details = getMovieById(films, Number(movieId));

  const imagePath = `https://image.tmdb.org/t/p/w500/${
    details?.poster_path || details?.backdrop_path
  }`;

  const released = (function tryRelease() {
    if (details !== undefined) {
      return Date.now() - new Date(details.release_date).getTime() > 0
        ? 'Выпущен'
        : 'Не выпущен';
    }
    return null;
  })();

  return (
    <div>
      {details ? (
        <div className="movie-details">
          <div className="movie-details__container-img">
            <img className="movie-details__img" src={imagePath} alt="poster" />
          </div>
          <div className="movie-details__short">
            <h2 className="short__header">{details.title}</h2>
            <p className="short__rating">Рейтинг: {details.vote_average}</p>
            <p className="short__text">{details.overview}</p>
            <div className="movie-details__info">
              <div className="movie-details__info__buttons">
                <button className="info__button_elem active" type="button">
                  Детали
                </button>
                <button className="info__button_elem" type="button">
                  Видео
                </button>
                <button className="info__button_elem" type="button">
                  Актеры
                </button>
              </div>
              <div className="movie-details__info-details">
                <ul>
                  <li>Статус : {released}</li>
                  <li>Дата выхода : {details.release_date}</li>
                  <li>Продолжительность</li>
                  <li>Язык оригинала : {details.original_language}</li>
                  <li>Страна</li>
                  <li>Бюджет</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>Данные на найдены, пожалуйста, вернитесь на домашнюю страницу</div>
      )}
    </div>
  );
}

export { MovieDetails };
