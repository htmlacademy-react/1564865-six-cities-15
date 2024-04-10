import { createAsyncThunk } from '@reduxjs/toolkit';
import { TAppDispatch, TState, TAuthData, TUserData } from '../types/state';
import { AxiosInstance } from 'axios';
import { TReview, TReviewData, TReviews } from '../types/review';
import { TOffer } from '../types/offer';
import { APIRoute } from '../const';
import { saveToken, dropToken } from '../services/token';
import { TOfferPreview } from '../types/offer-preview';
import { NameSpace } from '../const';

export const fetchOffersAction = createAsyncThunk<TOfferPreview[], undefined, {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
}
>(
  'data/fetchOffers',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<TOfferPreview[]>(APIRoute.Offers);
    return data;
  },
);

export const fetchAroundOffersAction = createAsyncThunk<TOfferPreview[], string, {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
}
>(
  'data/fetchAroundOffers',
  async (id, { extra: api }) => {
    const { data } = await api.get<TOfferPreview[]>(`${APIRoute.Offers}/${id}/nearby`);
    return data;
  },
);

export const fetchReviewsAction = createAsyncThunk<TReviews, string, {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
}
>(
  'data/fetchReviews',
  async (id, { extra: api }) => {
    const { data } = await api.get<TReviews>(`${APIRoute.Comments}/${id}`);
    return data;
  },
);

export const fetchFavoritesAction = createAsyncThunk<TOfferPreview[], undefined, {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
}
>(
  'data/fetchFavorites',
  async (_, { extra: api }) => {
    const { data } = await api.get<TOfferPreview[]>(APIRoute.Favorite);
    return data;
  },
);

export const fetchOfferAction = createAsyncThunk<TOffer, string, {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
}
>(
  'data/fetchOffer',
  async (id, { extra: api }) => {
    const { data } = await api.get<TOffer>(`${APIRoute.Offers}/${id}`);
    return data;
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
}
>(
  'user/checkAuth',
  async (_arg, { extra: api }) => {
    await api.get(APIRoute.Login);
  },
);

export const loginAction = createAsyncThunk<void, TAuthData, {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
}
>(
  'user/login',
  async ({ email: email, password }, { extra: api }) => {
    const { data: { token } } = await api.post<TUserData>(APIRoute.Login, { email, password });
    saveToken(token);
  },
);

export const fetchAddReviewAction = createAsyncThunk<TReview[], TReviewData, {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
}
>(
  'data/addReview',
  async ({ comment, rating }, { getState, extra: api }) => {
    const state = getState();
    const { data } = await api.post<TReview[]>
    (`${APIRoute.Comments}/${state[NameSpace.Data].offer?.id}`, { comment, rating });
    return data;
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
}
>(
  'user/logout',
  async (_arg, { extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  },
);
