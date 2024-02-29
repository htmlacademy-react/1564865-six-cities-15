import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

import Header from '../../components/header/header';
import OfferCard from '../../components/offer-card/offer-card';

import { CITIES } from '../../const';
import { PLACE_OPTIONS } from '../../const';

type MainPageProps = {
  offersCount: number;
}

function MainPage({ offersCount }: MainPageProps): JSX.Element {

  const [activeCity, setActiveCity] = useState<string | null>(null);

  const handleMouseEnter = (city: string) => {
    setActiveCity(city);
  };
  const handleMouseLeave = () => {
    setActiveCity(null);
  };

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 cities - Main Page</title>
      </Helmet>
      <Header />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              {CITIES.map((city) => (
                <li className="locations__item" key={city}>
                  <Link
                    to={`/${city}`}
                    className={`locations__item-link tabs__item ${activeCity === city ? 'tabs__item--active' : ''}`}
                    onMouseEnter={() => handleMouseEnter(city)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <span>{city}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offersCount} places to stay in Amsterdam</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  {PLACE_OPTIONS.map((place) => (
                    <li
                      key={place}
                      className="places__option"
                      tabIndex={0}
                    >
                      {place}
                    </li>
                  ))}
                </ul>
              </form>
              <div className="cities__places-list places__list tabs__content">
                <OfferCard />
                <OfferCard />
                <OfferCard />
                <OfferCard />
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map"></section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
