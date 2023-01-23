import { useDispatch, useSelector } from 'react-redux';
import './Sidebar.css';
import { genres } from '../../../additional/consts';
import Pagination from './pagination/pagination';
import ControlledSelect from './controlled_select/controlled_select';
import { OPTIONS_SORT, OPTIONS_YEAR } from '../../../additional/options';
import {
  updSelectedGenres,
  resetSelectedGenres,
  deleteUnselGenres,
  updSort,
  updYearFilter,
  resetSort,
  resetYearFilter,
} from '../../../additional/actions';
import { Store } from '../../../additional/store';
import getIdFromGenres from '../../../additional/getIdFromGenres';

function Sidebar() {
  const { sort, yearFilter, selectedGenres } = useSelector(
    (store: Store) => store
  );
  const dispatch = useDispatch();
  const boundUpdSort = (value: string) => dispatch(updSort(value));
  const boundUpdYearFilter = (value: string) => dispatch(updYearFilter(value));

  const addGenreId = (name: string) => {
    const id: number | null = getIdFromGenres(name);
    if (id) {
      if (selectedGenres.find((genreId) => genreId === id)) {
        const filteredId = selectedGenres.filter((genreId) => genreId !== id);
        dispatch(deleteUnselGenres([...filteredId]));
      } else dispatch(updSelectedGenres(id));
    }
  };

  const labelsElems = genres.map((label) => (
    <label
      htmlFor={`filter_${label.id}`}
      className="sidebar__label"
      key={label.id}
    >
      <input
        checked={selectedGenres.includes(label.id)}
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
    dispatch(resetSort());
    dispatch(resetYearFilter());
    dispatch(resetSelectedGenres());
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
          currentState={sort}
          className="sidebar__select"
          handleChange={boundUpdSort}
          name="criterion"
          options={OPTIONS_SORT}
        />
      </div>
      <div>
        <p className="sidebar__text-el">Год релиза:</p>
        <ControlledSelect
          currentState={yearFilter}
          className="sidebar__select"
          handleChange={boundUpdYearFilter}
          name="releaseYear"
          options={OPTIONS_YEAR}
        />
      </div>
      <div className="sidebar__labels-block">{labelsElems}</div>
      <Pagination />
    </div>
  );
}

export default Sidebar;
