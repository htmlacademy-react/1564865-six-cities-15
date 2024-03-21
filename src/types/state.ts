import { store } from '../store/index';

export type TState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
