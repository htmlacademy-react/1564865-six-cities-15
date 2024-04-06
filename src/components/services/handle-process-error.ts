import { store } from '../../store';
import { setError } from '../../store/action';
import { clearErrorAction } from '../../store/api-action';
import { CustomError } from '../../types/error';

export const handleProcessError = (message: CustomError): void => {
  store.dispatch(setError(message));
  store.dispatch(clearErrorAction());
};
