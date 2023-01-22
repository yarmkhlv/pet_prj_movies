import './Sidebar.css';
import {
  genres,
  SELECTED_VALUE,
  SELECTED_YEAR,
} from '../../../additional/consts';
import Pagination from './Pagination/Pagination';
import { Films } from '../../../additional/films';
import ControlledSelect from './controlledSelect/ControlledSelect';
import { OPTIONS_SORT, OPTIONS_YEAR } from '../../../additional/options';

function Sidebar(props: {
  currentPage: number;
  setCurrentPage: (a: number) => void;
  setCurrentSort: (a: string) => void;
  setCurrentFilter: (a: string) => void;
  setCurrentChecked: (a: []) => void;
  filtredMovies: Films[];
  addGenreId: (name: string) => void;
  currentSort: string;
  currentFilter: string;
}) {
  const {
    currentPage,
    setCurrentPage,
    setCurrentSort,
    setCurrentFilter,
    setCurrentChecked,
    filtredMovies,
    addGenreId,
    currentSort,
    currentFilter,
  } = props;
  const labelsElems = genres.map((label) => (
    <label htmlFor="filter" className="sidebar__label" key={label.id}>
      <input
        onChange={(event) => addGenreId(event.target.name)}
        type="checkbox"
        name={label.name}
        value="yes"
        id="filter"
      />
      <span>{label.name}</span>
    </label>
  ));
  const returnDefault = () => {
    setCurrentSort(SELECTED_VALUE.popularDescending);
    setCurrentFilter(SELECTED_YEAR.any);
    setCurrentChecked([]);
  };
  return (
    <div className="sidebar">
      <h2 className="sidebar__text-filters">Фильтры:</h2>
      <button
        onClick={() => returnDefault()}
        type="button"
        className="sidebar__btn-reset"
      >
        Сбросить все фильтры
      </button>
      <div>
        <p className="sidebar__text-el">Сортировать по:</p>
        <ControlledSelect
          currentState={currentSort}
          textForClass="sidebar__select"
          handleChange={setCurrentSort}
          name="criterion"
          options={OPTIONS_SORT}
        />
      </div>
      <div>
        <p className="sidebar__text-el">Год релиза:</p>
        <ControlledSelect
          currentState={currentFilter}
          textForClass="sidebar__select"
          handleChange={setCurrentFilter}
          name="releaseYear"
          options={OPTIONS_YEAR}
        />
        {/* <select
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
        </select> */}
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
