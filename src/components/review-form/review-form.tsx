import { ChangeEvent, Fragment, useState, FormEvent } from 'react';
import { MIN_COMMENT_LENGTH, MAX_COMMENT_LENGTH } from '../../const';
import { fetchAddReviewAction } from '../../store/api-action';
import { useAppDispatch } from '../../hooks';

// type TStarRating = {
//   id: number;
//   title: string;
// };

// const STARS_RATING: TStarRating[] = [
//   { id: 5, title: 'perfect' },
//   { id: 4, title: 'good' },
//   { id: 3, title: 'not bad' },
//   { id: 2, title: 'badly' },
//   { id: 1, title: 'terribly' },
// ];

const STARS_RATING = ['terribly', 'badly', 'not bad', 'good', 'perfect'];

function ReviewForm(): JSX.Element {

  // const [comment, setComment] = useState<string>('');
  // const [rating, setRating] = useState<string>('');
  // const isValid: boolean =
  //   comment.length >= MIN_COMMENT_LENGTH &&
  //   comment.length <= MAX_COMMENT_LENGTH &&
  //   rating !== '';

  // function handleTextareaChange(evt: ChangeEvent<HTMLTextAreaElement>): void {
  //   setComment(evt.target.value);
  // }

  // function handleInputChange(evt: ChangeEvent<HTMLInputElement>): void {
  //   setRating(evt.target.value);
  // }

  const initialState = {
    comment: '',
    rating: 0
  };

  const [formData, setFormData] = useState(initialState);

  const dispatch = useAppDispatch();

  const isValid =
    formData.comment.length >= MIN_COMMENT_LENGTH &&
    formData.comment.length <= MAX_COMMENT_LENGTH &&
    formData.rating !== 0;

  function handleRatingChange(evt: ChangeEvent<HTMLInputElement>) {
    setFormData({ ...formData, rating: +evt.target.value });
  }

  function handleTextChange(evt: ChangeEvent<HTMLTextAreaElement>) {
    setFormData({ ...formData, comment: evt.target.value });
  }

  function handleFormSubmit(evt: FormEvent<HTMLFormElement>) {
    evt.preventDefault();

    dispatch(fetchAddReviewAction(formData));
    setFormData(initialState);
  }

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={handleFormSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {Array.from({ length: 5 }, (_, index: number) => ++index)
          .reverse()
          .map((item) => (
            <Fragment key={`${item}-stars`}>
              <input className="form__rating-input visually-hidden" name="rating" value={item} id={`${item}-stars`} type="radio" onChange={handleRatingChange} checked={formData.rating === item} />
              <label htmlFor={`${item}-stars`} className="reviews__rating-label form__rating-label" title={STARS_RATING[item - 1]}>
                <svg className="form__star-image" width="37" height="33">
                  <use xlinkHref="#icon-star"></use>
                </svg>
              </label>
            </Fragment>
          ))}
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" onChange={handleTextChange} value={formData.comment}></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">{MIN_COMMENT_LENGTH} characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={!isValid}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewForm;
