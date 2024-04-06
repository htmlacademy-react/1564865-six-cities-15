import { store } from '../../store';
import { setError } from '../../store/action';
import { clearErrorAction } from '../../store/api-action';
import { Error } from '../../types/error';

export const handleProcessError = (message: Error): void => {
  store.dispatch(setError(message));
  store.dispatch(clearErrorAction());
};
