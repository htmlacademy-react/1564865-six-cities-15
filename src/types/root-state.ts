import { AuthorizationStatus } from '../const';
import { TCity } from './city';
import { TOffer } from './offer';
import { TOfferPreview } from './offer-preview';
import { TReviews } from './review';
import { TSortItem } from './sort';

export type rootState = {
  offers: TOfferPreview[];
  aroundOffers: TOfferPreview[];
  reviews: TReviews;
  offer: TOffer | null;
  favorites: TOfferPreview[];
  activeCity: TCity;
  activeSortItem: TSortItem;
  authorizationStatus: AuthorizationStatus;
  isOffersDataLoading: boolean;
  error: Error;
}

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
};
