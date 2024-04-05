import { createAction } from '@reduxjs/toolkit';

import { AuthorizationStatus } from '../const';

import { TOffer } from '../types/offer';
import { TCity } from '../types/city';
import { TOfferPreview } from '../types/offer-preview';
import { TReviews } from '../types/review';

export const fetchOffers = createAction<TOfferPreview[]>('offers/fetch');

export const fetchOffer = createAction<TOffer>('offer/fetch');

export const fetchNearPlaces = createAction<TOfferPreview[]>('nearOffers/fetch');

export const fetchReviews = createAction<TReviews>('reviews/fetch');

export const dropOffer = createAction('offer/dropOffer');

export const setActiveCity = createAction<TCity>('offers/setActiveCity');

export const fetchFavoriteOffers = createAction<TOfferPreview[]>('favorites/fetch');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setOffersDataLoadingStatus = createAction<boolean>('offers/setOffersDataLoadingStatus');
