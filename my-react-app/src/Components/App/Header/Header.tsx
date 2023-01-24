import './header.css';
import { useSelector, useDispatch } from 'react-redux';
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
} from '../../../additional/consts/actions';

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
      <span className="header__text-home">Home</span>
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
