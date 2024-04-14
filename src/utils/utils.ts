import { AuthorizationStatus, RATING_MAX } from '../const';
import { TOfferPreview } from '../types/offer-preview';

export function getRatingValue(rating: number): number {
  return (Math.ceil(rating) * 100) / RATING_MAX;
}

export function addPluralEnding(count: number) {
  return count !== 1 ? 's' : '';
}

export function capitalize(str: string) {
  return str[0].toUpperCase() + str.slice(1);
}

function sortByRating(offerA: TOfferPreview, offerB: TOfferPreview) {
  return offerB.rating - offerA.rating;
}

function sortLowToHigh(offerA: TOfferPreview, offerB: TOfferPreview) {
  return offerA.price - offerB.price;
}

function sortHighToLow(offerA: TOfferPreview, offerB: TOfferPreview) {
  return offerB.price - offerA.price;
}

export const sorting: Record<string, (offers: TOfferPreview[]) => TOfferPreview[]> = {
  Popular: (offers: TOfferPreview[]) => offers.slice(),
  HighToLow: (offers: TOfferPreview[]) => offers.slice().sort(sortHighToLow),
  LowToHigh: (offers: TOfferPreview[]) => offers.slice().sort(sortLowToHigh),
  TopRated: (offers: TOfferPreview[]) => offers.slice().sort(sortByRating)
};

export function checkAuthorizationStatus(status: AuthorizationStatus) {
  return status === AuthorizationStatus.Auth;
}
