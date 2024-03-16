import PlaceCard from '../../components/place-card/place-card';
import { TOfferPreview } from '../../types/offer-preview';

type TOfferListProps = {
  offers: TOfferPreview[];
  onCardHover?: (offerId: TOfferPreview['id'] | null) => void;
}

function OfferList({ offers, onCardHover }: TOfferListProps) {
  return (
    <>
      {offers.map((offer) => (
        <PlaceCard key={offer.id} offers={offer} block='cities' onCardHover={onCardHover}/>
      ))}
    </>
  );
}

export default OfferList;
