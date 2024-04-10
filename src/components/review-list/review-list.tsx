import { memo } from 'react';

import { TReviews } from '../../types/review';
import ReviewsItem from '../reviews-item/reviews-item';

type TReviewList = {
  reviews: TReviews;
}

function ReviewList({ reviews }: TReviewList): JSX.Element {

  return (
    <ul className="reviews__list">
      {reviews.map((review) => (
        <ReviewsItem key={review.id} review={review} />
      ))}
    </ul>
  );
}

const ReviewListMemo = memo(ReviewList);

export default ReviewListMemo;
