import './MovieCard.css';

function MovieCard() {
  return (
    <div className="movieCard">
      <div className="movieCard__info">
        <div className="movieCard__info-rating">
          <p>8.5</p>
        </div>
        <div className="movieCard__info-btns">
          <button
            type="button"
            className="info-btns__favorites"
            aria-label="Add to favourites"
          />
          <button
            type="button"
            className="info-btns__postpone"
            aria-label="Add to postpones"
          />
        </div>
      </div>
      <div className="movieCard__text-name">
        Клинок расскеающий демонов поезд бесконенчости
      </div>
    </div>
  );
}

export default MovieCard;
