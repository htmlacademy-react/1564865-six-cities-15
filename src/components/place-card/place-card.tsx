import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { AppRoute } from '../../const';
import { capitalize } from '../../utils/utils';
import { TOfferPreview } from '../../types/offer-preview';
import { TOffer } from '../../types/offer';

import FavoriteButton from '../favorite-button/favorite-button';

type TCardProps = {
  offer: TOfferPreview;
  block: string;
  onListItemHover?: (itemId: TOffer['id'] | null) => void;
}

function PlaceCard({ offer, block, onListItemHover }: TCardProps): JSX.Element {

  const { price, title, rating, previewImage, isPremium, isFavorite, type, id } = offer;

  const offerLink = `${AppRoute.Offer}/${id}`;

  function handleOfferMouseEnter() {
    onListItemHover?.(id);
  }

  function handleOfferMouseLeave() {
    onListItemHover?.(null);
  }

  useEffect(() => {
  }, [isFavorite]);

  return (
    <article
      className={`${block}__card place-card`}
      onMouseEnter={handleOfferMouseEnter}
      onMouseLeave={handleOfferMouseLeave}
    >
      {isPremium ? <div className="place-card__mark"><span>Premium</span></div> : ''}
      <div className={`${block}__image-wrapper place-card__image-wrapper`}>
        <Link to={offerLink}>
          <img
            className="place-card__image"
            src={previewImage}
            width="260"
            height="200"
            alt={title}
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <FavoriteButton
            id={id}
            isFavorite={isFavorite}
            nameBlock={'place-card'}
          />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span
              style={{width: `${rating * 100 / 5}%`}}
            >
            </span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={offerLink}>{title}</Link>
        </h2>
        <p className="place-card__type">{capitalize(type)}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
