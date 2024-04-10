import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { TAppProcess } from '../../types/app-process';
import { CityMapDefault } from '../../const';
import { TSortItem } from '../../types/sort';
import { TCity } from '../../types/city';

const initialState: TAppProcess = {
  activeCity: CityMapDefault,
  activeSortItem: 'Popular',
};

export const appProcess = createSlice({
  name: NameSpace.App,
  initialState,
  reducers: {
    setActiveSortItem: (state, action: PayloadAction<TSortItem>) => {
      state.activeSortItem = action.payload;
    },
    setActiveCity: (state, action: PayloadAction<TCity>) => {
      state.activeCity = action.payload;
    },
  },
  extraReducers() {}
});

export const { setActiveSortItem, setActiveCity } = appProcess.actions;
