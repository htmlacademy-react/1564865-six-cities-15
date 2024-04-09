import { createSelector } from '@reduxjs/toolkit';
import { sorting } from '../utils/utils';
import { TSortItem } from '../types/sort';
import { TOffers } from '../types/offer';
import { TState } from '../types/state';

export const getActiveCity = (state: TState) => state.activeCity;

export const getAutorisationStatus = (state: TState) => state.authorizationStatus;

export const getOffers = (state: { offers: TOffers; activeSortItem: TSortItem }) => state.offers;

export const getSortItem = (state: { offers: TOffers; activeSortItem: TSortItem }) => state.activeSortItem;

export const sortOffers = createSelector(
  [getOffers, getSortItem],
  (offers, activeSortItem) => {

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
