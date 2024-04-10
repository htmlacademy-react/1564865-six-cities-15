import { AuthorizationStatus } from '../const';
import { TUserData } from './state';

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  user: TUserData;
};
