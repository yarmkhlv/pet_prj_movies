import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Store } from '../../../../additional/store';
import { updCurrentPage } from '../../../../additional/consts/actions';
import { PER_PAGE } from '../../../../additional/consts/other';
import './pagination.css';

function Pagination() {
  const currentPage = useSelector((store: Store) => store.currentPage);
  const currentMovies = useSelector((store: Store) => store.currentMovies);
  const dispatch = useDispatch();
  const [lastPage, setLastPage] = useState(
    Math.ceil(currentMovies.length / PER_PAGE)
  );
  useEffect(() => {
    setLastPage(Math.ceil(currentMovies.length / PER_PAGE));
  }, [currentMovies]);
  useEffect(() => {
    if (currentPage > lastPage) dispatch(updCurrentPage(lastPage));
    if (currentPage <= 0) dispatch(updCurrentPage(1));
  }, [lastPage]);
  return (
    <div className="pagination">
      <div className="pagination__btns">
        {currentPage > 1 ? (
          <button
            onClick={() => dispatch(updCurrentPage(currentPage - 1))}
            type="button"
            className="pagination__btns-el"
          >
            Назад
          </button>
        ) : null}
        {currentPage === lastPage ? null : (
          <button
            onClick={() => dispatch(updCurrentPage(currentPage + 1))}
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
