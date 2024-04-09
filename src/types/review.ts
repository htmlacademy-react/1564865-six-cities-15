import { TUser } from './user';

export type TReviewType = {
  'id': string;
  'user': TUser;
  'rating': number;
  'comment': string;
  'date': string;
};

export type TReview = {
  comment: string;
  date: string;
  id: string;
  rating: number;
  user: {
    avatarUrl: string;
    isPro: boolean;
    name: string;
  };
}

export type TReviews = TReview[];

export type TReviewData = {
  comment: string;
  rating: number;
}
