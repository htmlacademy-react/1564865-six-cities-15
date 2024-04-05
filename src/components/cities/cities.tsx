import { useState } from 'react';

import Map from '../map/map';
import OfferList from '../offer-list/offer-list';
import SortList from '../../components/sort-list/sort-list';

import { SortMap } from '../../const';
import { TOffer } from '../../types/offer';
import { useAppSelector } from '../../hooks';
import { addPluralEnding } from '../../utils/utils';
import { sorting } from '../../utils/utils';

function Cities() {

  const [selectedPointId, setSelectedPointId] = useState<TOffer['id'] | null>(null);

  const [activeSortItem, setActiveSortItem] = useState<string>(SortMap.Popular);

  const activeCity = useAppSelector((state) => state.activeCity);
  const offers = useAppSelector((state) => state.offers);

  function handleListItemHover(itemId: TOffer['id'] | null) {
    setSelectedPointId(itemId);
  }

  const currentOffers = offers.filter((offer) => offer.city.name === activeCity.name);

  function sortingItems(label: string) {
    switch (label) {
      case SortMap.Popular:
        return sorting.Popular(currentOffers);
      case SortMap.HightToLow:
        return sorting.HighToLow(currentOffers);
      case SortMap.LowToHigh:
        return sorting.LowToHigh(currentOffers);
      case SortMap.TopRated:
        return sorting.TopRated(currentOffers);
    }
    return sorting.Popular(currentOffers);
  }

  let sortedOffers: TOffer[] = sortingItems(activeSortItem);

  function handleSortItems(label: string) {
    sortedOffers = sortingItems(label);
    setActiveSortItem(label);
    return sortedOffers;
  }

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{currentOffers.length} place{addPluralEnding(currentOffers.length)} to stay in {activeCity.name}</b>
          <SortList
            activeSortItem={activeSortItem}
            onSortItems={handleSortItems}
          />

          <OfferList
            offers={sortedOffers}
            block={'cities'}
            onListItemHover={handleListItemHover}
          />

        </section>
        <div className="cities__right-section">

          <Map
            block={'cities'}
            offers={currentOffers}
            location={activeCity.location}
            selectedPointId={selectedPointId}
          />

        </div>
      </div>
    </div>
  );
}

export default Cities;
