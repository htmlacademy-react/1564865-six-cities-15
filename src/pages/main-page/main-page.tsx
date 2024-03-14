import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

import Header from '../../components/header/header';
// import OfferCard from '../../components/offer-card/offer-card';
import Cities from '../../components/cities/cities';

import { TOfferPreview } from '../../types/offer-preview';

import { CITIES } from '../../const';
// import { PLACE_OPTIONS } from '../../const';

type MainPageProps = {
  offers: TOfferPreview[];
}

function MainPage({ offers }: MainPageProps): JSX.Element {

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
        <Cities offers={offers} />
      </main>
    </div>
  );
}

export default MainPage;
