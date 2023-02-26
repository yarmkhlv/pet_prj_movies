/* eslint-disable no-nested-ternary */
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { genresOffer } from '../../../additional/consts/other';
import { Films, films } from '../../../additional/consts/films';
import { getOffer } from '../../../additional/functions/get_offer';
import './search.css';

function Search() {
  const [movieOffers, setMovieOffers] = useState<Films[] | null>(null);
  const [currentOffer, setCurrentOffer] = useState(0);
  const [offerGenre, setOfferGenre] = useState('0');
  const [offerRating, setOfferRating] = useState('high');
  const [offerPopularity, setOfferPopularity] = useState('popular');

  const movieOffer = movieOffers ? movieOffers[currentOffer] : null;

  const boundSetMovieOffer = () => {
    setMovieOffers(getOffer(films, offerGenre, offerRating, offerPopularity));
    setCurrentOffer(0);
  };

  const optionsOfferGenre = genresOffer.map((genre) => (
    <option key={genre.id} value={genre.id}>
      {genre.name}
    </option>
  ));
  return (
    <div className="grid-for-search">
      <div className="search">
        <form className="search__form">
          <p className="search__form__text-el">Выбор жанра:</p>
          <select
            className="search__form__select"
            name="offer genre"
            value={offerGenre}
            onChange={(event) => setOfferGenre(event.target.value)}
          >
            {optionsOfferGenre}
          </select>
          <p className="search__form__text-el">Оценка фильма:</p>
          <select
            className="search__form__select"
            value={offerRating}
            name="offer rating"
            onChange={(event) => setOfferRating(event.target.value)}
          >
            <option value="high">Высокая</option>
            <option value="low">Низкая</option>
          </select>
          <p className="search__form__text-el">Популярность:</p>
          <select
            className="search__form__select"
            value={offerPopularity}
            name="offer pupularity"
            onChange={(event) => setOfferPopularity(event.target.value)}
          >
            <option value="popular">Популярный</option>
            <option value="unknown">Неизвестный</option>
          </select>
          <button
            className="search__form__button"
            type="button"
            onClick={(event) => {
              event.preventDefault();
              boundSetMovieOffer();
            }}
          >
            Поиск фильма
          </button>
        </form>
        {movieOffer ? (
          <div className="search__offer-container">
            <div className="offer__movie">
              <div className="offer__movie__container-img">
                <img
                  className="offer__movie__img"
                  src={`https://image.tmdb.org/t/p/w500/${
                    movieOffer.poster_path || movieOffer.backdrop_path
                  }`}
                  alt="movie poster"
                />
              </div>
            </div>
            <div className="offer__buttons">
              <button
                className="offer__buttons__el btn-not-suitable"
                type="button"
              >
                <NavLink to={`/movie-details/${movieOffer.id}`}>
                  Подходит
                </NavLink>
              </button>
              <button
                className="offer__buttons__el btn-fits"
                type="button"
                onClick={() => setCurrentOffer(currentOffer + 1)}
              >
                Не подходит
              </button>
            </div>
          </div>
        ) : movieOffers !== null && currentOffer >= movieOffers.length ? (
          <div className="alert">
            Фильмы по заданным параметрам закончились или не были найдены
          </div>
        ) : null}
      </div>
    </div>
  );
}

export { Search };
