import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { DataProcess } from '../../types/data-process';
import { fetchAddReviewAction, fetchAroundOffersAction, fetchOfferAction, fetchOffersAction, fetchReviewsAction } from '../api-action';

const initialState: DataProcess = {
  offers: [],
  isOffersDataLoading: false,
  aroundOffers: [],
  reviews: [],
  offer: null,
  favorites: [],
  hasError: false
};

export const dataProcess = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {
    dropOffer: (state) => {
      state.offer = null;
      state.aroundOffers = [];
      state.reviews = [];
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchAroundOffersAction.fulfilled, (state, action) => {
        state.aroundOffers = action.payload;
      })
      .addCase(fetchReviewsAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
      })
      .addCase(fetchOfferAction.fulfilled, (state, action) => {
        state.offer = action.payload;
      })
      .addCase(fetchAddReviewAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isOffersDataLoading = false;
      })
      .addCase(fetchOffersAction.pending, (state) => {
        state.isOffersDataLoading = true;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.isOffersDataLoading = false;
      });
  }
});

export const { dropOffer } = dataProcess.actions;
