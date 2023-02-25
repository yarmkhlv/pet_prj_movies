import './header.css';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Store } from '../../../additional/store';
import {
  updModalActive,
  updUserAuth,
  clearBookmarkMovies,
  clearFavorMovies,
  resetQuickFilter,
  resetSelectedGenres,
  resetSort,
  resetYearFilter,
  updMobileActive,
} from '../../../additional/consts/actions';

function Header() {
  const { userAuth, mobileActive } = useSelector((store: Store) => store);
  console.log(mobileActive);
  const dispatch = useDispatch();
  const boundUpdModalActive = () => dispatch(updModalActive(true));
  const boundUpdMobileActive = () => dispatch(updMobileActive(!mobileActive));
  const resetAll = () => {
    dispatch(resetQuickFilter());
    dispatch(resetSelectedGenres());
    dispatch(resetSort());
    dispatch(resetYearFilter());
  };
  const boundExit = () => {
    dispatch(updUserAuth(false));
    localStorage.removeItem('user');
    dispatch(clearFavorMovies());
    dispatch(clearBookmarkMovies());
    resetAll();
  };

  return (
    <header className="header">
      <nav>
        <Link className="header__link-home" to="/">
          Home
        </Link>
        <Link className="header__link-home" to="/search">
          Search
        </Link>
      </nav>
      <button
        onClick={boundUpdMobileActive}
        className="mobile-btn"
        type="button"
        aria-label="Filter mobile"
      >
        <span className="mobile-filter-icon" />
      </button>
      {userAuth ? (
        <button onClick={boundExit} type="button" className="header__btn-login">
          Выйти
        </button>
      ) : (
        <button
          onClick={boundUpdModalActive}
          type="button"
          className="header__btn-login"
        >
          Войти
        </button>
      )}
    </header>
  );
}

export { Header };
