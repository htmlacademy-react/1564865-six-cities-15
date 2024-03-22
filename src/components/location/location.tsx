import { useDispatch } from 'react-redux';
import { setActiveCity } from '../../store/action';


import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

import { CityMapData } from '../../const';

function Location() {

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
  );
}

export default Location;
