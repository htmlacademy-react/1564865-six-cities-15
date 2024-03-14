import { TUser } from './user';

export type TReviewType = {
  'id': string;
  'user': TUser;
  'rating': number;
  'comment': string;
  'date': string;
};
