import { useState } from 'react';

import Map from '../map/map';
import OfferList from '../offer-list/offer-list';
import SortList from '../../components/sort-list/sort-list';

import { TOffer } from '../../types/offer';
import { useAppSelector } from '../../hooks';
import { addPluralEnding } from '../../utils/utils';
import { TSortItem } from '../../types/sort';

import { setActiveSortItem } from '../../store/action';
import { useAppDispatch } from '../../hooks';
import { sortOffers } from '../../store/selectors';

function Cities() {

  const dispatch = useAppDispatch();

  const [selectedPointId, setSelectedPointId] = useState<TOffer['id'] | null>(null);

  const activeSortItem = useAppSelector((state) => state.activeSortItem);

  const activeCity = useAppSelector((state) => state.activeCity);

  const offers = useAppSelector((state) => state.offers);

  const filteredOffers = offers.filter((offer) => offer.city.name === activeCity.name);

  const currentOffers = useAppSelector(() => sortOffers({ offers: filteredOffers, activeSortItem }));

  function handleListItemHover(itemId: TOffer['id'] | null) {
    setSelectedPointId(itemId);
  }

  function handleSortItems(type: TSortItem) {
    dispatch(setActiveSortItem(type));
    return currentOffers;
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
            offers={currentOffers}
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
