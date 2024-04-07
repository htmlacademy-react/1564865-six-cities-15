import { REVIEW_DATE_FORMAT } from '../../const';
import { TReview } from '../../types/review';
import { getRatingValue } from '../../utils/utils';
import dayjs from 'dayjs';

type TReviewsItem = {
  review: TReview;
}

function ReviewsItem({ review }: TReviewsItem):JSX.Element {

  const { comment, date, rating, user } = review;

  const dateValue = dayjs(date).format(REVIEW_DATE_FORMAT);

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={user.avatarUrl}
            width="54" height="54"
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">
          {user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: `${getRatingValue(rating)}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={date}>{dateValue}</time>
      </div>
    </li>
  );
}

export default ReviewsItem;
