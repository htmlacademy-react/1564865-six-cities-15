import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchAddToFavoriteAction } from '../../store/api-action';
import { useNavigate } from 'react-router-dom';
import { checkAuthorizationStatus } from '../../utils/utils';
import { getAutorisationStatus } from '../../store/user-process/selectors';
import { AppRoute } from '../../const';
import { changeOfferFavoriteStatus } from '../../store/data-process/data-process';

type FavoriteButtonBlock = 'default' | 'offer';

type FavoriteButtonProps = {
 id: string;
 isFavorite: boolean;
 nameBlock: string;
 size?: FavoriteButtonBlock;
}

const buttonSize: Record<FavoriteButtonBlock, {width: string; height: string}> = {
  default: { width: '18', height: '19' },
  offer: { width: '31', height: '33' },
};

function FavoriteButton({ id, isFavorite, nameBlock, size = 'default' }: FavoriteButtonProps): JSX.Element {

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const authorizationStatus = useAppSelector(getAutorisationStatus);

  const isLogged = checkAuthorizationStatus(authorizationStatus);

  const [isBookmarkActive, setBookmarkActive] = useState(isFavorite);

  function handleFavoriteButtonClick() {
    if (!isLogged) {
      navigate(AppRoute.Login);
    }

    dispatch(changeOfferFavoriteStatus(id));
    dispatch(fetchAddToFavoriteAction({ id, status: Number(!isBookmarkActive) }));
    setBookmarkActive((prev) => !prev);
  }

  return (
    <button
      type="button"
      onClick={handleFavoriteButtonClick}
      className={`${nameBlock}__bookmark-button button ${isBookmarkActive && `${nameBlock}__bookmark-button--active`}`}
    >
      <svg
        className={`${nameBlock}__bookmark-icon`}
        {...buttonSize[size]}
      >
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">In bookmarks</span>
    </button >
  );
}

export default FavoriteButton;
