import { useState } from 'react';

import Map from '../map/map';
import OfferList from '../offer-list/offer-list';

import { TOffer } from '../../types/offer';
import { useAppSelector } from '../../hooks';
import { addPluralEnding } from '../../utils/utils';

const placesOptions: string[] = [
  'Popular',
  'Price: low to high',
  'Price: high to low',
  'Top rated first',
];

function Cities() {

  const [selectedPointId, setSelectedPointId] = useState<TOffer['id'] | null>(null);

  const activeCity = useAppSelector((state) => state.activeCity);
  const offers = useAppSelector((state) => state.offers);

  function handleListItemHover(itemId: TOffer['id'] | null) {
    setSelectedPointId(itemId);
  }

  const currentOffers = offers.filter((offer) => offer.city.name === activeCity.name);

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{currentOffers.length} place{addPluralEnding(currentOffers.length)} to stay in {activeCity.name}</b>
          <form className="places__sorting" action="#" method="get">
            <span className="places__sorting-caption">Sort by</span>
            <span className="places__sorting-type" tabIndex={0}>
            Popular
              <svg className="places__sorting-arrow" width="7" height="4">
                <use xlinkHref="#icon-arrow-select"></use>
              </svg>
            </span>
            <ul className="places__options places__options--custom places__options--opened">
              {placesOptions.map((place) => (
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

            <OfferList
              offers={currentOffers}
              handleListItemHover={handleListItemHover}
            />

          </div>
        </section>
        <div className="cities__right-section">

          <Map
            block={'cities'}
            offers={currentOffers}
            selectedPointId={selectedPointId}
          />

        </div>
      </div>
    </div>
  );
}

export default Cities;
