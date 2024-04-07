import { Link } from 'react-router-dom';
import Logo from '../logo/logo';
import { AppRoute } from '../../const';
import { useAppSelector } from '../../hooks';
import { AuthorizationStatus } from '../../const';
import { logoutAction } from '../../store/api-action';
import { useAppDispatch } from '../../hooks';

function Header() {

  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  const dispatch = useAppDispatch();

  function handleLogoutClick() {
    dispatch(logoutAction());
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo />
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">

                {authorizationStatus === AuthorizationStatus.Auth
                  ?
                  <Link to={AppRoute.Favorites} className="header__nav-link header__nav-link--profile">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    <span className="header__favorite-count">3</span>
                  </Link>
                  :
                  <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Login}>
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__login">Sign in</span>
                  </Link>}
              </li>
              {authorizationStatus === AuthorizationStatus.Auth
                &&
              <li className="header__nav-item">
                <Link
                  to={'/'}
                  className="header__nav-link"
                  onClick={handleLogoutClick}
                >
                  <span className="header__signout">Sign out</span>
                </Link>
              </li>}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
