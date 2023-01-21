import { Films } from '../../../../additional/films';
import { PER_PAGE } from '../../../../additional/consts';
import './Pagination.css';

function Pagination(props: {
  currentPage: number;
  setCurrentPage: (a: number) => void;
  filtredMovies: Films[];
}) {
  const { currentPage, setCurrentPage, filtredMovies } = props;
  const lastPage = Math.ceil(filtredMovies.length / PER_PAGE);
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
