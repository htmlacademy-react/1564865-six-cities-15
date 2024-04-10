import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { TOfferPreview } from '../../types/offer-preview';
import { TOffer } from '../../types/offer';
import classNames from 'classnames';
import { fetchAddToFavoriteAction } from '../../store/api-action';
import { useAppDispatch } from '../../hooks';
import { useState } from 'react';

type TCardProps = {
  offer: TOfferPreview;
  block: string;
  onListItemHover?: (itemId: TOffer['id'] | null) => void;
}

function PlaceCard({ offer, block, onListItemHover }: TCardProps): JSX.Element {

  const { price, title, rating, previewImage, isPremium, isFavorite, type, id } = offer;

  const [isBookmarkActive, setBookmarkActive] = useState(isFavorite);

  const dispatch = useAppDispatch();

  const offerLink = `${AppRoute.Offer}/${id}`;

  function handleOfferMouseEnter() {
    onListItemHover?.(id);
  }

  function handleOfferMouseLeave() {
    onListItemHover?.(null);
  }

  function handleFavoriteButtonClick() {
    dispatch(fetchAddToFavoriteAction({ id, status: Number(!isBookmarkActive) }));

    setBookmarkActive((prev) => !prev);
  }

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
          <button
            type="button"
            onClick={handleFavoriteButtonClick}
            className={classNames(
              '`place-card__bookmark-button button',
              { 'place-card__bookmark-button--active': isBookmarkActive })}
          >
            <svg
              className="place-card__bookmark-icon"
              width="18"
              height="19"
            >
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">{isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
          </button>
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
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
