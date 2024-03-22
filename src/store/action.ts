import { createAction } from '@reduxjs/toolkit';

import { NameSpace } from '../const';

import { TOffer } from '../types/offer';
import { TCity } from '../types/city';

export const fetchOffers = createAction(`${NameSpace.Offers}/fetchOffers`);

export const fetchOffer = createAction<TOffer['id']>(`${NameSpace.Offer}/fetchOffer`);

export const fetchNearPlaces = createAction<TOffer['id']>(`${NameSpace.NearPlaces}/fetchNearPlaces`);

export const fetchReviews = createAction<TOffer['id']>(`${NameSpace.Reviews}/fetchReviews`);

export const dropOffer = createAction(`${NameSpace.Offer}/dropOffer`);

export const setActiveCity = createAction<TCity>(`${NameSpace.Offers}/setActiveCity`);

export const fetchFavorites = createAction(`${NameSpace.Favorites}/fetchFavorites`);
