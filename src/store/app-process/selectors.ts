import { createSelector } from '@reduxjs/toolkit';
import { TState } from '../../types/state';
import { NameSpace } from '../../const';
import { sorting } from '../../utils/utils';
// import { TOfferPreviews } from '../../types/offer-preview';
import { TOffers } from '../../types/offer';

export const getActiveCity = (state: TState) => state[NameSpace.App].activeCity;

export const getSortItem = (state: TState) => state[NameSpace.App].activeSortItem;

export const sortOffers = createSelector(
  [
    (state: TState) => state[NameSpace.App].activeSortItem,
    (_: TState, offers: TOffers) => offers
  ],
  (activeSortItem, offers) => {

    switch (activeSortItem) {
      case 'Popular':
        return sorting.Popular(offers);
      case 'HightToLow':
        return sorting.HighToLow(offers);
      case 'LowToHigh':
        return sorting.LowToHigh(offers);
      case 'TopRated':
        return sorting.TopRated(offers);
    }
  },
);
