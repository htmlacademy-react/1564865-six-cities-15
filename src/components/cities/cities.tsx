import PlaceCard from '../../components/offer-card/offer-card';

import { TOfferPreview } from '../../types/offer-preview';

const placesOptions: string[] = [
  'Popular',
  'Price: low to high',
  'Price: high to low',
  'Top rated first',
];

type TCitiesProps = {
  offers: TOfferPreview[];
}

function Cities({ offers }: TCitiesProps) {
  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{offers.length} places to stay in Amsterdam</b>
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

            {offers.map((offer) => (
              <PlaceCard key={offer.id} offer={offer} />
            ))}

          </div>
        </section>
        <div className="cities__right-section">
          <section className="cities__map map"></section>
        </div>
      </div>
    </div>
  );
}

export default Cities;
