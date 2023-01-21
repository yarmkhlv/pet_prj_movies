import './Sidebar.css';
import {
  genres,
  SELECTED_VALUE,
  SELECTED_YEAR,
} from '../../../additional/consts';
import Pagination from './Pagination/Pagination';
import { Films } from '../../../additional/films';

function Sidebar(props: {
  currentPage: number;
  setCurrentPage: (a: number) => void;
  setCurrentSort: (a: string) => void;
  setCurrentFilter: (a: string) => void;
  filtredMovies: Films[];
}) {
  const {
    currentPage,
    setCurrentPage,
    setCurrentSort,
    setCurrentFilter,
    filtredMovies,
  } = props;
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
        <select
          onChange={(event) => setCurrentSort(event.target.value)}
          className="sidebar__select"
          name="criterion"
        >
          <option
            defaultValue={SELECTED_VALUE.popularDescending}
            value="popularDescending"
          >
            Популярные по убыванию
          </option>
          <option value={SELECTED_VALUE.popularAscending}>
            Популярные по возрастанию
          </option>
          <option value={SELECTED_VALUE.ratingDescending}>
            Рейтинг по убыванию
          </option>
          <option value={SELECTED_VALUE.ratingAscending}>
            Рейтинг по возрастанию
          </option>
        </select>
      </div>
      <div>
        <p className="sidebar__text-el">Год релиза:</p>
        <select
          onChange={(event) => setCurrentFilter(event.target.value)}
          className="sidebar__select"
          name="releaseYear"
        >
          <option defaultValue={SELECTED_YEAR.any} value={SELECTED_YEAR.any}>
            Любой
          </option>
          <option value={SELECTED_YEAR[2020]}>2020</option>
          <option value={SELECTED_YEAR[2019]}>2019</option>
          <option value={SELECTED_YEAR[2018]}>2018</option>
          <option value={SELECTED_YEAR[2017]}>2017</option>
        </select>
      </div>
      <div className="sidebar__labels-block">{labelsElems}</div>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        filtredMovies={filtredMovies}
      />
    </div>
  );
}

export default Sidebar;
