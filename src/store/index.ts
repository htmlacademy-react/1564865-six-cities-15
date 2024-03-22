import { configureStore, Reducer, AnyAction } from '@reduxjs/toolkit';
import { reducer } from './reducer';
import { TAppState } from '../types/state';

const rootReducer: Reducer<TAppState, AnyAction> = reducer;

export const store = configureStore({
  reducer: rootReducer
});
