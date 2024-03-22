import { useDispatch } from 'react-redux';
import { setActiveCity } from '../../store/action';

import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

import { AppRoute } from '../../const';

import Header from '../../components/header/header';
import Cities from '../../components/cities/cities';

import { CityMapData } from '../../const';

function MainPage(): JSX.Element {

  const [activeCityName, setActiveCityName] = useState<string | null>(null);
  const dispatch = useDispatch();

  const handleMouseEnter = (city: string) => {
    setActiveCityName(city);
  };
  const handleMouseLeave = () => {
    setActiveCityName(null);
  };

  const handleCityClick = (cityName: keyof typeof CityMapData) => {
    const cityData = CityMapData[cityName];
    if (cityData) {
      const { name, location } = cityData;
      const city = { name, location };
      dispatch(setActiveCity(city));
    }
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
              {Object.keys(CityMapData).map((cityName) => (
                <li className="locations__item" key={cityName}>
                  <Link
                    to={AppRoute.Root}
                    className={`locations__item-link tabs__item ${activeCityName === cityName ? 'tabs__item--active' : ''}`}
                    onMouseEnter={() => handleMouseEnter(cityName)}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleCityClick(cityName)}
                  >
                    <span>{cityName}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
        <Cities />
      </main>
    </div>
  );
}

export default MainPage;
