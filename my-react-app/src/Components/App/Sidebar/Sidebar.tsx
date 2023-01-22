import './Sidebar.css';
import {
  genres,
  SELECTED_VALUE,
  SELECTED_YEAR,
} from '../../../additional/consts';
import Pagination from './pagination/Pagination';
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
  currentChecked: number[];
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
    currentChecked,
  } = props;
  const labelsElems = genres.map((label) => (
    <label
      htmlFor={`filter_${label.id}`}
      className="sidebar__label"
      key={label.id}
    >
      <input
        checked={currentChecked.includes(label.id)}
        onChange={(event) => addGenreId(event.target.name)}
        type="checkbox"
        name={label.name}
        value="yes"
        id={`filter_${label.id}`}
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
          className="sidebar__select"
          handleChange={setCurrentSort}
          name="criterion"
          options={OPTIONS_SORT}
        />
      </div>
      <div>
        <p className="sidebar__text-el">Год релиза:</p>
        <ControlledSelect
          currentState={currentFilter}
          className="sidebar__select"
          handleChange={setCurrentFilter}
          name="releaseYear"
          options={OPTIONS_YEAR}
        />
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
