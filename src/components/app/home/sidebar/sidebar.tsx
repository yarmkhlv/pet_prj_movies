import { useDispatch, useSelector } from 'react-redux';
import './sidebar.css';
import { genres } from '../../../../helpers/consts/other';
import Pagination from './pagination/pagination';
import ControlledSelect from './controlled_select/controlled_select';
import {
  OPTIONS_QUICK,
  OPTIONS_SORT,
  OPTIONS_YEAR,
} from '../../../../helpers/consts/options';
import {
  updSelectedGenres,
  resetSelectedGenres,
  deleteUnselGenres,
  updSort,
  updYearFilter,
  resetSort,
  resetYearFilter,
  updQuickFilter,
} from '../../../../helpers/consts/actions';
import { Store } from '../../../../store';
import getIdFromGenres from '../../../../helpers/functions/get_id_from_genres';

function Sidebar() {
  const {
    sort,
    yearFilter,
    selectedGenres,
    userAuth,
    quickFilter,
    mobileActive,
  } = useSelector((store: Store) => store);

  const dispatch = useDispatch();

  const boundUpdSort = (value: string) => dispatch(updSort(value));
  const boundUpdYearFilter = (value: string) => dispatch(updYearFilter(value));
  const boundUpdQuickFilter = (value: string) =>
    dispatch(updQuickFilter(value));

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

  const mobileSidebarActive = mobileActive ? 'mobileShow' : 'mobileHide';

  return (
    <div className={`sidebar ${mobileSidebarActive}`}>
      <div>
        <h2 className="sidebar__text-filters">??????????????:</h2>
        <button
          onClick={() => returnDefault()}
          type="button"
          className="sidebar__btn-reset"
        >
          ???????????????? ?????? ??????????????
        </button>
        <div>
          <p className="sidebar__text-el">?????????????????????? ????:</p>
          <ControlledSelect
            currentState={sort}
            className="sidebar__select"
            handleChange={boundUpdSort}
            name="criterion"
            options={OPTIONS_SORT}
          />
        </div>
        <div>
          <p className="sidebar__text-el">?????? ????????????:</p>
          <ControlledSelect
            currentState={yearFilter}
            className="sidebar__select"
            handleChange={boundUpdYearFilter}
            name="releaseYear"
            options={OPTIONS_YEAR}
          />
        </div>
        {userAuth ? (
          <div>
            <p className="sidebar__text-el">?????????????? ????????????:</p>
            <ControlledSelect
              currentState={quickFilter}
              className="sidebar__select"
              handleChange={boundUpdQuickFilter}
              name="quickAccess"
              options={OPTIONS_QUICK}
            />
          </div>
        ) : null}
      </div>

      <div className="sidebar__labels-block">{labelsElems}</div>
      <Pagination />
    </div>
  );
}

export default Sidebar;
