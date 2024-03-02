import { TUser } from './user';

export type TReviewType = {
  'id': number;
  'user': TUser;
  'rating': number;
  'comment': string;
  'date': string;
};
