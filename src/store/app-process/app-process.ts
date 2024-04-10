import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { AppProcess } from '../../types/app-process';
import { CityMapDefault } from '../../const';
import { TSortItem } from '../../types/sort';
import { TCity } from '../../types/city';

const initialState: AppProcess = {
  activeCity: CityMapDefault,
  activeSortItem: 'Popular',
};

export const userProcess = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {
    setActiveSortItem: (state, action: PayloadAction<TSortItem>) => {
      state.activeSortItem = action.payload;
    },
    setActiveCity: (state, action: PayloadAction<TCity>) => {
      state.activeCity = action.payload;
    },
  },
  extraReducers() { }
});
