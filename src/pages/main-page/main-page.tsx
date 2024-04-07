import { Helmet } from 'react-helmet-async';

import Header from '../../components/header/header';
import Cities from '../../components/cities/cities';
import Location from '../../components/location/location';
import { useAppSelector } from '../../hooks';
import { getActiveCity, getOffers, getSortItem, sortOffers } from '../../store/selectors';

function MainPage(): JSX.Element {

  const activeSortItem = useAppSelector(getSortItem);

  const activeCity = useAppSelector(getActiveCity);

  const offers = useAppSelector(getOffers);

  const filteredOffers = offers.filter((offer) => offer.city.name === activeCity.name);

  const currentOffers = useAppSelector(() => sortOffers({ offers: filteredOffers, activeSortItem }));

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 cities - Main Page</title>
      </Helmet>
      <Header />

      <main className={`page__main page__main--index ${currentOffers.length === 0 && 'page__main--index-empty'}`}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <Location />
        </div>
        <Cities />
      </main>
    </div>
  );
}

export default MainPage;
