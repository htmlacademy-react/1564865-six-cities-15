import { TState } from '../../types/state';
import { NameSpace } from '../../const';

export const getOffer = (state: TState) => state[NameSpace.Data].offer;

export const getAroundOffers = (state: TState) => state[NameSpace.Data].aroundOffers;

export const getReviews = (state: TState) => state[NameSpace.Data].reviews;

export const getIsOffersDataLoading = (state: TState) => state[NameSpace.Data].isOffersDataLoading;

export const getOffers = (state: TState) => state[NameSpace.Data].offers;

export const getErrorStatus = (state: TState): boolean => state[NameSpace.Data].hasError;
