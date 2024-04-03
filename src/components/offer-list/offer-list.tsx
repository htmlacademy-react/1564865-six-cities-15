import PlaceCard from '../../components/place-card/place-card';
import { TOffer } from '../../types/offer';
import { TOfferPreview } from '../../types/offer-preview';

type TOfferListProps = {
  offers: TOfferPreview[];
  isOtherPlaces?: boolean;
  block: string;
  handleListItemHover: (itemId: TOffer['id'] | null) => void;
}

function OfferList({ offers, isOtherPlaces, block, handleListItemHover }: TOfferListProps) {
  return (
    <div className={isOtherPlaces ? 'near-places__list places__list' : 'cities__places-list places__list tabs__content'}>
      {offers.map((offer) => (
        <PlaceCard
          key={offer.id}
          offers={offer}
          block={block}
          handleListItemHover={handleListItemHover}
        />
      ))}
    </div>
  );
}

export default OfferList;
