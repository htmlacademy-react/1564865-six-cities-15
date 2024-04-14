import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

import { Helmet } from 'react-helmet-async';
import classNames from 'classnames';

import { useAppSelector } from '../../hooks';
import { MAX_AROUND_OFFERS_COUNT, MAX_OFFER_IMAGE_COUNT, MAX_REVIEWS_COUNT, NameBlockForFavoriteButton } from '../../const';

import HeaderMemo from '../../components/header/header';
import OfferListMemo from '../../components/offer-list/offer-list';
import ReviewListMemo from '../../components/review-list/review-list';
import ReviewFormMemo from '../../components/review-form/review-form';
import MapMemo from '../../components/map/map';
import Loading from '../loading-screen/loading';
import NotFoundPage from '../not-found-page/not-found-page';
import FavoriteButton from '../../components/favorite-button/favorite-button';

import { useAppDispatch } from '../../hooks';
import { fetchOfferAction, fetchAroundOffersAction, fetchReviewsAction } from '../../store/api-action';
import { dropOffer } from '../../store/data-process/data-process';
import { getRatingValue, checkAuthorizationStatus, capitalize } from '../../utils/utils';
import { getAutorisationStatus } from '../../store/user-process/selectors';
import { getOffer, getAroundOffers, getReviews, getIsOffersDataLoading } from '../../store/data-process/selectors';


function Offer(): JSX.Element {

  const { id } = useParams();
  const dispatch = useAppDispatch();

  const offer = useAppSelector(getOffer);

  const authorizationStatus = useAppSelector(getAutorisationStatus);
  const offersAround = useAppSelector(getAroundOffers);
  const reviews = useAppSelector(getReviews);

  const isLogged = checkAuthorizationStatus(authorizationStatus);

  const isOffersDataLoading = useAppSelector(getIsOffersDataLoading);

  const offersAroundRender = offersAround.slice(0, MAX_AROUND_OFFERS_COUNT);

  const reviewsRender = reviews.slice(0, MAX_REVIEWS_COUNT);

  useEffect(() => {
    if (!id) {
      return;
    }

    dispatch(fetchOfferAction(id));
    dispatch(fetchAroundOffersAction(id));
    dispatch(fetchReviewsAction(id));

    return () => {
      dispatch(dropOffer());
    };
  }, [dispatch, id]);

  if (!isOffersDataLoading && !offer) {
    return <Loading />;
  }

  if (!offer) {
    return <NotFoundPage />;
  }

  const { images, isPremium, title, rating, type, bedrooms, maxAdults, price, goods, description } = offer;

  const { avatarUrl, name, isPro } = offer.host;

  const imagesRender = images.slice(0, MAX_OFFER_IMAGE_COUNT);

  return (
    <>
      <HeaderMemo />
      <main className="page__main page__main--offer">
        <Helmet>
          <title>6 cities - Offer Page</title>
        </Helmet>
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {imagesRender.map((image) => (
                <div key={image} className="offer__image-wrapper">
                  <img className="offer__image" src={image} alt={title} />
                </div>
              ))}
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {isPremium &&
                <div className="offer__mark">
                  <span>Premium</span>
                </div>}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {title}
                </h1>
                <FavoriteButton
                  id={offer?.id}
                  isFavorite={offer?.isFavorite}
                  nameBlock={NameBlockForFavoriteButton.Offer}
                  size={'offer'}
                />
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{ width: `${getRatingValue(rating)}%` }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{rating}</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {capitalize(type)}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {maxAdults} adults
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {goods.map((good) => (
                    <li key={good} className="offer__inside-item">
                      {good}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className={classNames(
                    'offer__avatar-wrapper user__avatar-wrapper',
                    { 'offer__avatar-wrapper--pro': isPro }
                  )}
                  >
                    <img
                      className="offer__avatar user__avatar"
                      src={avatarUrl}
                      width="74"
                      height="74"
                      alt="Host avatar"
                    />
                  </div>
                  <span className="offer__user-name">
                    {name}
                  </span>
                  {isPro &&
                    <span className="offer__user-status">
                      Pro
                    </span>}
                </div>
                <div className="offer__description">
                  <p className="offer__text">
                    {description}
                  </p>
                </div>
              </div>
              <section className="offer__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
                <ReviewListMemo reviews={reviewsRender} />
                {isLogged &&
                  <ReviewFormMemo />}
              </section>
            </div>
          </div>
          <MapMemo
            offers={offersAroundRender}
            block={'offer'}
            location={offer.location}
            offer={offer}
          />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <OfferListMemo
                offers={offersAroundRender}
                block={'near-places'}
                isOtherPlaces
              />
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default Offer;
