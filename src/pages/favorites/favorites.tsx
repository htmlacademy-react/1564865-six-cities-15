import { Helmet } from 'react-helmet-async';

import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import PlaceCard from '../../components/offer-card/offer-card';

import { TOfferPreview } from '../../types/offer-preview';

type TFavoritesPageProps = {
  offers: TOfferPreview[];
}

function Favorites({ offers }: TFavoritesPageProps): JSX.Element {
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
              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>Amsterdam</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  {offers.map((offer) => (
                    <PlaceCard key={offer.id} offer={offer} />
                  ))}
                </div>
              </li>

              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>Cologne</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  {offers.slice(0, 1).map((offer) => (
                    <PlaceCard key={offer.id} offer={offer} />
                  ))}
                </div>
              </li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Favorites;
