import { Helmet } from 'react-helmet-async';

import { useAppSelector, useAppDispatch } from '../../hooks';
// import { fetchFavoriteOffers } from '../../store/action';

import Footer from '../../components/footer/footer';
import HeaderMemo from '../../components/header/header';
import FavoritesCard from '../../components/favorites-card/favorites-card';
import { useEffect } from 'react';

function Favorites(): JSX.Element {

  const dispatch = useAppDispatch();

  const favoritesOffers = useAppSelector((state) => state.favorites);

  useEffect(() => {
    // dispatch(fetchFavoriteOffers());
  }, [dispatch]);

  const CitiesList = [...new Set(favoritesOffers.map((offer) => offer.city.name))].sort();

  return (
    <div className="page">
      <HeaderMemo />
      <main className="page__main page__main--favorites">
        <Helmet>
          <title>6 cities - Favorites Page</title>
        </Helmet>
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {CitiesList.map((city) => (
                <li className="favorites__locations-items" key={city}>
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <a className="locations__item-link" href="#">
                        <span>{city}</span>
                      </a>
                    </div>
                  </div>
                  <div className="favorites__places">
                    {favoritesOffers
                      .filter((offer) => offer.city.name === city)
                      .map((offer) => (
                        <FavoritesCard
                          offer={offer}
                          key={offer.id}
                        />
                      ))}
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Favorites;
