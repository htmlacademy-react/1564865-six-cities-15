import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { TAppState, TAppDispatch } from '../types/state';

export const useAppDispatch = () => useDispatch<TAppDispatch>();

export const useAppSelector: TypedUseSelectorHook<TAppState> = useSelector;
