import films from '../../../../additional/films';
import './Pagination.css';

function Pagination(props: {
  currentPage: number;
  setCurrentPage: (a: number) => void;
}) {
  const { currentPage, setCurrentPage } = props;
  const lastPage = Math.ceil(films.length / 10);
  return (
    <div className="pagination">
      <div className="pagination__btns">
        {currentPage > 1 ? (
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            type="button"
            className="pagination__btns-el"
          >
            Назад
          </button>
        ) : null}
        {currentPage === lastPage ? null : (
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            type="button"
            className="pagination__btns-el"
          >
            Вперед
          </button>
        )}
      </div>
      <div className="pagination__pages">
        {currentPage} из {lastPage}
      </div>
    </div>
  );
}

export default Pagination;
