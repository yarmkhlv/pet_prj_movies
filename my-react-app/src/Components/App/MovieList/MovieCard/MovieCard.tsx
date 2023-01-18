import './MovieCard.css';

function MovieCard(props: { rating: number; title: string; path: string }) {
  const { rating, title, path } = props;
  return (
    <div className="movieCard">
      <div className="movieCard__poster">
        <img
          className="movieCard__poster-img"
          src="../../../src/assets/poster2.jpeg"
          alt="poster"
        />
        <div className="movieCard__poster-rating">
          <p>{rating}</p>
        </div>
        <div className="movieCard__poster-btns">
          <button
            type="button"
            className="poster-btns__favorites"
            aria-label="Add to favourites"
          />
          <button
            type="button"
            className="poster-btns__postpone"
            aria-label="Add to postpones"
          />
        </div>
        <div className="movieCard__poster-title">{title}</div>
      </div>
    </div>
  );
}

export default MovieCard;
