import { RATING_MAX } from '../const';
import { TOffer } from '../types/offer';

export function getRatingValue(rating: number): number {
  return (rating * 100) / RATING_MAX;
}

export function addPluralEnding(count: number) {
  return count !== 1 ? 's' : '';
}

export function capitalize(str: string) {
  return str[0].toUpperCase() + str.slice(1);
}

function sortByRating(offerA: TOffer, offerB: TOffer) {
  return offerB.rating - offerA.rating;
}

function sortLowToHigh(offerA: TOffer, offerB: TOffer) {
  return offerA.price - offerB.price;
}

function sortHighToLow(offerA: TOffer, offerB: TOffer) {
  return offerB.price - offerA.price;
}

export const sorting: Record<string, (offers: TOffer[]) => TOffer[]> = {
  Popular: (offers: TOffer[]) => offers.slice(),
  HighToLow: (offers: TOffer[]) => offers.slice().sort(sortHighToLow),
  LowToHigh: (offers: TOffer[]) => offers.slice().sort(sortLowToHigh),
  TopRated: (offers: TOffer[]) => offers.slice().sort(sortByRating)
};
