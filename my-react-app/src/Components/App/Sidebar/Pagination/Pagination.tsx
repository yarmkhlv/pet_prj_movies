import './Pagination.css';

function Pagination() {
  return (
    <div className="pagination">
      <div className="pagination__btns">
        <button type="button" className="pagination__btns-el">
          Назад
        </button>
        <button type="button" className="pagination__btns-el">
          Вперед
        </button>
      </div>
      <div className="pagination__pages">1 из 1455</div>
    </div>
  );
}

export default Pagination;
