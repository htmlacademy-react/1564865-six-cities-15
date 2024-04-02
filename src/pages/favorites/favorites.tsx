import { Helmet } from 'react-helmet-async';

import { useAppSelector, useAppDispatch } from '../../hooks';
import { fetchFavoriteOffers } from '../../store/action';

import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import OfferList from '../../components/offer-list/offer-list';

function Favorites(): JSX.Element {

  const dispatch = useAppDispatch();
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  dispatch(fetchFavoriteOffers());

  const favoritesOffers = useAppSelector((state) => state.favorites);

  const offers = useAppSelector((state) => state.offers);

  const CitiesList = [...new Set(favoritesOffers.map((offer) => offer.city.name))].sort();

  return (
    <div className="page">
      <Header />
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
                        <OfferList offers={offers} key={offer.id} />
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
