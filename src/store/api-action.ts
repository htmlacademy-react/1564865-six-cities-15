import { createAsyncThunk } from '@reduxjs/toolkit';
import { TAppDispatch, TState, UserData, AuthData } from '../types/state';
import { AxiosInstance } from 'axios';
import { fetchOffers, requireAuthorization, fetchReviews, setOffersDataLoadingStatus } from './action';
// import { TOfferPreview } from '../types/offer-preview';

import { TReviews } from '../types/review';
import { TOffer } from '../types/offer';
import { APIRoute, AuthorizationStatus } from '../const';
import { saveToken, dropToken } from '../components/services/token';

type apiActionConfig = {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
};

export const fetchOffersAction = createAsyncThunk<void, undefined, apiActionConfig>(
  'data/fetchOffers',
  async (_arg, { dispatch, extra: api }) => {
    dispatch(setOffersDataLoadingStatus(true));
    const { data } = await api.get<TOffer[]>(APIRoute.Offers);
    dispatch(setOffersDataLoadingStatus(false));
    dispatch(fetchOffers(data));
  },
);

export const fetchReviewsAction = createAsyncThunk<void, undefined, apiActionConfig>(
  'data/fetchReviews',
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get<TReviews>(APIRoute.Comments);
    dispatch(fetchReviews(data));
  },
);

export const loginAction = createAsyncThunk<void, AuthData, apiActionConfig>(
  'user/login',
  async ({ login: email, password }, { dispatch, extra: api }) => {
    const { data: { token } } = await api.post<UserData>(APIRoute.Login, { email, password });
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, apiActionConfig>(
  'user/logout',
  async (_arg, { dispatch, extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  },
);
