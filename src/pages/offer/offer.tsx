import { Helmet } from 'react-helmet-async';

import { useAppSelector } from '../../hooks';

import Header from '../../components/header/header';
import OfferList from '../../components/offer-list/offer-list';
import ReviewList from '../../components/review-list/review-list';
import ReviewForm from '../../components/review-form/review-form';
import Map from '../../components/map/map';
import { useAppDispatch } from '../../hooks';
import { fetchOfferAction, fetchAroundOffersAction, fetchReviewsAction } from '../../store/api-action';
import { dropOffer } from '../../store/action';
import { /*AppRoute,*/ MAX_AROUND_OFFERS_COUNT, MAX_REVIEWS_COUNT } from '../../const';
import { useEffect } from 'react';
import { /*Navigate,*/ useParams } from 'react-router-dom';
import NotFoundPage from '../not-found-page/not-found-page';
import LoadingScreen from '../loading-screen/loading-screen';
import { getRatingValue } from '../../utils/utils';


function Offer(): JSX.Element {

  const { id } = useParams();
  const dispatch = useAppDispatch();

  const offer = useAppSelector((state) => state.offer);
  const isOffersDataLoading = useAppSelector((state) => state.isOffersDataLoading);

  const offersAround = useAppSelector((state) => state.nearPlaces);
  const offersAroundRender = offersAround.slice(0, MAX_AROUND_OFFERS_COUNT);

  const reviews = useAppSelector((state) => state.reviews);
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

  if (!offer && !isOffersDataLoading) {
    return <LoadingScreen />;
  }
  if (!offer) {
    return <NotFoundPage />;
  }

  const { images, isPremium, title, rating, type, bedrooms, maxAdults, price, goods, description } = offer;

  const { avatarUrl, name, isPro } = offer.host;

  return (
    <>
      <Header />
      <main className="page__main page__main--offer">
        <Helmet>
          <title>6 cities - Offer Page</title>
        </Helmet>
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {images.map((image) => (
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
                <button className="offer__bookmark-button button" type="button">
                  <svg className="offer__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
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
                  {type}
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
                  <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
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
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">1</span></h2>
                <ReviewList reviews={reviewsRender}/>
                <ReviewForm />
              </section>
            </div>
          </div>
          <Map
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
              <OfferList
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
