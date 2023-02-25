import './header.css';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Store } from '../../../additional_/store';
import {
  updModalActive,
  updUserAuth,
  clearBookmarkMovies,
  clearFavorMovies,
  resetQuickFilter,
  resetSelectedGenres,
  resetSort,
  resetYearFilter,
} from '../../../additional_/consts/actions';

function Header() {
  const { userAuth } = useSelector((store: Store) => store);
  const dispatch = useDispatch();
  const boundUpdModalActive = () => dispatch(updModalActive(true));
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
      <Link className="header__link-home" to="/">
        Home
      </Link>
      <Link className="header__link-home" to="/search">
        Search
      </Link>
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

export default Header;
