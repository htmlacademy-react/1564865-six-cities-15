import { Helmet } from 'react-helmet-async';
import classNames from 'classnames';

import { useAppSelector } from '../../hooks';

import Footer from '../../components/footer/footer';
import HeaderMemo from '../../components/header/header';
import FavoritesList from '../../components/favorites-list/favorites-list';
import FavoritesEmpty from '../favorites-empty/favorites-empty';
import { getFavorites } from '../../store/data-process/selectors';

function Favorites(): JSX.Element {

  const favoritesOffers = useAppSelector(getFavorites);

  return (
    <div className="page">
      <HeaderMemo />
      <main className={classNames(
        'page__main page__main--favorites',
        { 'page__main--favorites-empty': favoritesOffers.length === 0 }
      )}
      >
        <Helmet>
          <title>6 cities - Favorites Page</title>
        </Helmet>
        <div className="page__favorites-container container">
          {
            favoritesOffers.length === 0 ? <FavoritesEmpty /> :
              <section className="favorites">
                <h1 className="favorites__title">Saved listing</h1>
                <FavoritesList offers={favoritesOffers}></FavoritesList>
              </section>
          }
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Favorites;
