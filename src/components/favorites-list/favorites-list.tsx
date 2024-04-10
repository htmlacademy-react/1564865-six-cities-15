import FavoritesCard from '../favorites-card/favorites-card';
import { useAppDispatch} from '../../hooks';
import { useEffect } from 'react';
import { fetchFavoritesAction } from '../../store/api-action';
import { TOfferPreview } from '../../types/offer-preview';

type FavoritesListProps = {
  offers: TOfferPreview[];
}

function FavoritesList({ offers }: FavoritesListProps): JSX.Element {

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFavoritesAction());
  }, [dispatch]);

  const CitiesList = [...new Set(offers.map((offer) => offer.city.name))].sort();

  return (
    <ul className="favorites__list">
      {CitiesList.map((city) => (
        <li className="favorites__locations-items" key={city}>
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>{city}</span>
              </a>
            </div>
          </div>
          <div className="favorites__places">
            {offers
              .filter((offer) => offer.city.name === city)
              .map((offer) => (
                <FavoritesCard offer={offer} key={offer.id} />
              ))}
          </div>
        </li>
      ))}
    </ul>
  );
}
export default FavoritesList;
