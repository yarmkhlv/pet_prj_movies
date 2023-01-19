import './Sidebar.css';
import genres from '../../../additional/consts';
import Pagination from './Pagination/Pagination';

function Sidebar(props: {
  currentPage: number;
  setCurrentPage: (a: number) => void;
}) {
  const { currentPage, setCurrentPage } = props;
  const labelsElems = genres.map((label) => (
    <label htmlFor="filter" className="sidebar__label" key={label.id}>
      <input type="checkbox" name={label.name} value="yes" id="filter" />
      <span>{label.name}</span>
    </label>
  ));
  return (
    <div className="sidebar">
      <h2 className="sidebar__text-filters">Фильтры:</h2>
      <button type="button" className="sidebar__btn-reset">
        Сбросить все фильтры
      </button>
      <div>
        <p className="sidebar__text-el">Сортировать по:</p>
        <select className="sidebar__select" name="criterion">
          <option value="popularDescending">Популярные по убыванию</option>
          <option value="popularAscending">Популярные по возрастанию</option>
        </select>
      </div>
      <div>
        <p className="sidebar__text-el">Год релиза:</p>
        <select className="sidebar__select" name="releaseYear">
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
      <div className="sidebar__labels-block">{labelsElems}</div>
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default Sidebar;
