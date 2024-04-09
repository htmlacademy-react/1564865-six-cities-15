import { createAsyncThunk } from '@reduxjs/toolkit';
import { TAppDispatch, TState, TAuthData, TUserData } from '../types/state';
import { AxiosInstance } from 'axios';
import { TReview, TReviewData, TReviews } from '../types/review';
import { TOffer, TOffers } from '../types/offer';
import { APIRoute, AuthorizationStatus, /*AuthorizationStatus,*/ TIMEOUT_SHOW_ERROR } from '../const';
import { saveToken, dropToken } from '../components/services/token';
import { store } from '.';

import {
  gethOffers,
  requireAuthorization,
  gethReviews,
  setOffersDataLoadingStatus,
  setError,
  getNearPlaces,
  addReview
}
  from './action';

export const clearErrorAction = createAsyncThunk(
  'app/clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR,
    );
  },
);

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
  }
>(
  'data/fetchOffers',
  async (_arg, { dispatch, extra: api }) => {
    dispatch(setOffersDataLoadingStatus(true));
    const { data } = await api.get<TOffer[]>(APIRoute.Offers);
    dispatch(setOffersDataLoadingStatus(false));
    dispatch(gethOffers(data));
  },
);

export const fetchAroundOffersAction = createAsyncThunk<void, string, {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
  }
>(
  'data/fetchAroundOffers',
  async (id, { dispatch, extra: api }) => {
    const { data } = await api.get<TOffers>(`${APIRoute.Offers}/${id}/nearby`);
    dispatch(getNearPlaces(data));
  },
);

export const fetchReviewsAction = createAsyncThunk<void, string, {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
  }
>(
  'data/fetchReviews',
  async (id, { dispatch, extra: api }) => {
    const { data } = await api.get<TReviews>(`${APIRoute.Comments}/${id}`);
    dispatch(gethReviews(data));
  },
);

export const fetchOfferAction = createAsyncThunk<void, string, {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
}
>(
  'data/fetchOffer',
  async (id, { dispatch, extra: api }) => {
    const { data } = await api.get<TOffers>(`${APIRoute.Offers}/${id}`);
    dispatch(gethOffers(data));
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
}
>(
  'user/checkAuth',
  async (_arg, { dispatch, extra: api }) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, TAuthData, {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
  }
>(
  'user/login',
  async ({ email: email, password }, { dispatch,extra: api }) => {
    const { data: { token } } = await api.post<TUserData>(APIRoute.Login, { email, password });
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
  },
);

export const fetchAddReviewAction = createAsyncThunk<void, TReviewData, {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
}
>(
  'offer/addReview',
  async ({ comment, rating }, { dispatch, getState, extra: api }) => {
    const state = getState();
    if (state.offer) {
      const { data } = await api.post<TReview>(`${APIRoute.Comments}/${state.offer.id}`, { comment, rating });
      dispatch(addReview(data));
    }
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
  }
>(
  'user/logout',
  async (_arg, { dispatch, extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  },
);
