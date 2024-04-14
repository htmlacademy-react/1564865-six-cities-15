import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameBlockForFavoriteButton, NameSpace } from '../../const';
import { DataProcess } from '../../types/data-process';
import { TOfferPreview } from '../../types/offer-preview';
import {
  fetchAddReviewAction,
  fetchAroundOffersAction,
  fetchOfferAction,
  fetchOffersAction,
  fetchReviewsAction,
  fetchFavoritesAction,
  fetchAddToFavoriteAction
} from '../api-action';

type OfferFavoriteStatus = {
  id: TOfferPreview['id'];
  nameBlock: NameBlockForFavoriteButton;
}

const initialState: DataProcess = {
  offers: [],
  isOffersDataLoading: false,
  aroundOffers: [],
  reviews: [],
  offer: null,
  favorites: [],
  hasErrorOffers: false,
  hasErrorOffer: false,
  addReviewStatus: {
    pending: false,
    rejected: false,
    success: false
  }
};

export const dataProcess = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {
    dropOffer: (state) => {
      state.offer = null;
      state.aroundOffers = [];
      state.reviews = [];
    },
    changeOfferFavoriteStatus: (state, action: PayloadAction<OfferFavoriteStatus>) => {
      const offerChangeFavorite = state.offers.find((offer) => offer.id === action.payload.id);

      if (offerChangeFavorite) {
        offerChangeFavorite.isFavorite = !offerChangeFavorite.isFavorite;
      }

      if (state.aroundOffers.length !== 0) {
        const offerAroundChangeFavorite = state.aroundOffers.find((offer) => offer.id === action.payload.id);

        if (offerAroundChangeFavorite) {
          offerAroundChangeFavorite.isFavorite = !offerAroundChangeFavorite.isFavorite;
        }
      }

      if (action.payload.nameBlock === NameBlockForFavoriteButton.Offer && state.offer !== null) {
        state.offer.isFavorite = !state.offer.isFavorite;
      }
    },
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
        state.hasErrorOffer = false;
      })
      .addCase(fetchOfferAction.rejected, (state) => {
        state.hasErrorOffer = true;
      })
      .addCase(fetchFavoritesAction.fulfilled, (state, action) => {
        state.favorites = action.payload;
      })
      .addCase(fetchAddReviewAction.fulfilled, (state, action) => {
        state.reviews.unshift(action.payload);
        state.addReviewStatus.rejected = false;
        state.addReviewStatus.success = true;
        state.addReviewStatus.pending = false;
      })
      .addCase(fetchAddReviewAction.pending, (state) => {
        state.addReviewStatus.pending = true;
        state.addReviewStatus.success = false;
        state.addReviewStatus.rejected = false;
      })
      .addCase(fetchAddReviewAction.rejected, (state) => {
        state.addReviewStatus.pending = false;
        state.addReviewStatus.rejected = true;
        state.addReviewStatus.success = false;
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
        state.hasErrorOffers = true;
      })
      .addCase(fetchAddToFavoriteAction.fulfilled, (state, action) => {
        const isFavorite = action.payload.isFavorite;

        if (isFavorite) {
          state.favorites.push(action.payload);
        }

        if (!isFavorite) {
          state.favorites = state.favorites.filter(
            (offer) => offer.id !== action.payload.id
          );
        }

        if (state.offer !== null) {
          state.offer.isFavorite = isFavorite;
        }
      });
  }
});

export const { dropOffer, changeOfferFavoriteStatus } = dataProcess.actions;
