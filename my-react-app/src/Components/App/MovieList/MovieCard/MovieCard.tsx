import "./MovieCard.css";

function MovieCard() {
  return (
    <div className="movieCard">
      <div className="movieCard__info">
        <div className="movieCard__info-rating">
          <p>8.5</p>
        </div>
        <div className="movieCard__info-btns">
          <button type="button" className="info-btns__favorites"></button>
          <button type="button" className="info-btns__postpone"></button>
        </div>
      </div>
      <div className="movieCard__text-name">
        Клинок расскеающий демонов поезд бесконенчости
      </div>
    </div>
  );
}

export default MovieCard;
