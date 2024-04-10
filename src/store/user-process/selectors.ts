import { TState } from '../../types/state';
import { NameSpace } from '../../const';

export const getAutorisationStatus = (state: TState) => state[NameSpace.User].authorizationStatus;
