import { useState } from 'react';
import { useCallback } from 'react';

import { Helmet } from 'react-helmet-async';
import classNames from 'classnames';

import Header from '../../components/header/header';
import Location from '../../components/location/location';
import OfferListMemo from '../../components/offer-list/offer-list';
import SortListMemo from '../../components/sort-list/sort-list';
import MapMemo from '../../components/map/map';
import NoCards from '../../components/no-cards/no-cards';

import { TOffer } from '../../types/offer';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { addPluralEnding } from '../../utils/utils';
import { TSortItem } from '../../types/sort';

import { getActiveCity, getSortItem, sortOffers } from '../../store/app-process/selectors';
import { setActiveSortItem } from '../../store/app-process/app-process';
import { getOffers } from '../../store/data-process/selectors';

function MainPage(): JSX.Element {

  const dispatch = useAppDispatch();

  const [selectedPointId, setSelectedPointId] = useState<TOffer['id'] | null>(null);

  const activeSortItem = useAppSelector(getSortItem);

  const activeCity = useAppSelector(getActiveCity);

  const offers = useAppSelector(getOffers);

  const filteredOffers = offers.filter((offer) => offer.city.name === activeCity.name);

  const currentOffers = useAppSelector((state) => sortOffers(state, filteredOffers));

  function handleListItemHover(itemId: TOffer['id'] | null) {
    setSelectedPointId(itemId);
  }

  const handleSortItems = useCallback((type: TSortItem) => {
    dispatch(setActiveSortItem(type));
    return currentOffers;
  }, [currentOffers, dispatch]);

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 cities - Main Page</title>
      </Helmet>
      <Header />

      <main className={classNames(
        'page__main page__main--index',
        { 'page__main--index-empty': currentOffers.length === 0 })}
      >
        <h1 className="visually-hidden">Cities</h1>
        <Location />
        {/* <Cities /> */}
        <div className="cities">
          {currentOffers.length === 0 ? <NoCards /> :
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{currentOffers.length} place{addPluralEnding(currentOffers.length)} to stay in {activeCity.name}</b>
                <SortListMemo
                  activeSortItem={activeSortItem}
                  onSortItems={handleSortItems}
                />

                <OfferListMemo
                  offers={currentOffers}
                  block={'cities'}
                  onListItemHover={handleListItemHover}
                />

              </section>
              <div className="cities__right-section">

                <MapMemo
                  block={'cities'}
                  offers={offers}
                  location={activeCity.location}
                  selectedPointId={selectedPointId}
                />

              </div>
            </div>}
        </div>
      </main>
    </div>
  );
}

export default MainPage;
