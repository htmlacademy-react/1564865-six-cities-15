import { createAction } from '@reduxjs/toolkit';

import { AuthorizationStatus } from '../const';

import { TOffer } from '../types/offer';
import { TCity } from '../types/city';
import { TOfferPreview } from '../types/offer-preview';
import { TReviews } from '../types/review';
import { TSortItem } from '../types/sort';
import { CustomError } from '../types/error';

export const gethOffers = createAction<TOffer[]>('offers/get');

export const gethOffer = createAction<TOffer>('offer/get');

export const getNearPlaces = createAction<TOffer[]>('nearOffers/get');

export const gethReviews = createAction<TReviews>('reviews/get');

export const dropOffer = createAction('offer/dropOffer');

export const setActiveCity = createAction<TCity>('offers/setActiveCity');

export const getFavoriteOffers = createAction<TOfferPreview[]>('favorites/get');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setOffersDataLoadingStatus = createAction<boolean>('offers/setOffersDataLoadingStatus');

export const setActiveSortItem = createAction<TSortItem>('offers/setActiveSortItem');

export const setError = createAction<CustomError>('app/setError');
