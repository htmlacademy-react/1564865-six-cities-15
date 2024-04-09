import { createAction } from '@reduxjs/toolkit';

import { TOffer, TOffers } from '../types/offer';
import { TCity } from '../types/city';
// import { TReview } from '../types/review';
import { TOfferPreview } from '../types/offer-preview';
import { TReview, TReviews } from '../types/review';
import { TSortItem } from '../types/sort';
import { CustomError } from '../types/error';
import { AuthorizationStatus } from '../const';

export const getOffers = createAction<TOffers>('offers/get');

export const getOffer = createAction<TOffer>('offer/get');

export const getNearPlaces = createAction<TOffer[]>('nearOffers/get');

export const gethReviews = createAction<TReviews>('reviews/get');

export const dropOffer = createAction('offer/dropOffer');

export const setActiveCity = createAction<TCity>('offers/setActiveCity');

export const getFavoriteOffers = createAction<TOfferPreview[]>('favorites/get');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setOffersDataLoadingStatus = createAction<boolean>('offers/setOffersDataLoadingStatus');

export const setActiveSortItem = createAction<TSortItem>('offers/setActiveSortItem');

export const setError = createAction<CustomError>('app/setError');

export const addReview = createAction<TReview>('offer/get');
