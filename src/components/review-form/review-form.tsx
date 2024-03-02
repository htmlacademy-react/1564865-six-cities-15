import { ChangeEvent, Fragment, useState } from 'react';
import { MIN_COMMENT_LENGTH, MAX_COMMENT_LENGTH } from '../../const';

type TStarRating = {
  id: number;
  title: string;
};

const STARS_RATING: TStarRating[] = [
  { id: 5, title: 'perfect' },
  { id: 4, title: 'good' },
  { id: 3, title: 'not bad' },
  { id: 2, title: 'badly' },
  { id: 1, title: 'terribly' },
];

function ReviewForm(): JSX.Element {

  const [comment, setComment] = useState<string>('');
  const [rating, setRating] = useState<string>('');
  const isValid: boolean =
    comment.length >= MIN_COMMENT_LENGTH &&
    comment.length <= MAX_COMMENT_LENGTH &&
    rating !== '';

  function handleTextareaChange(evt: ChangeEvent<HTMLTextAreaElement>): void {
    setComment(evt.target.value);
  }

  function handleInputChange(evt: ChangeEvent<HTMLInputElement>): void {
    setRating(evt.target.value);
  }

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {STARS_RATING.map((starRating: TStarRating) => (
          <Fragment key={starRating.id}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              onChange={handleInputChange}
              value={starRating.id}
              id={`${starRating.id}-star`}
              type="radio"
            />
            <label
              htmlFor={`${starRating.id}-star`}
              className="reviews__rating-label form__rating-label"
              title={starRating.title}
            >
              <svg
                className="form__star-image"
                width="37"
                height="33"
              >
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </Fragment>
        ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review" name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={comment}
        onChange={handleTextareaChange}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least {' '}
          <b
            className="reviews__text-amount"
          >
            {MIN_COMMENT_LENGTH} characters
          </b>
          .
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={!isValid}
        >Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewForm;
